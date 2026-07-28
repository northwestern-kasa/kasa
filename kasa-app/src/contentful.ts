/**
 * Lightweight Contentful Delivery API client.
 *
 * The full SDK added a sizeable client-side chunk even though this site only
 * needs two read operations. This keeps the same resolved response shape while
 * allowing page and image requests to start sooner.
 */
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const DELIVERY_TOKEN = import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN as string;
const PREVIEW_TOKEN = import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN as string | undefined;
const USE_PREVIEW =
  (import.meta.env.VITE_CONTENTFUL_USE_PREVIEW === "true" || import.meta.env.DEV) && !!PREVIEW_TOKEN;
const ACCESS_TOKEN = USE_PREVIEW ? PREVIEW_TOKEN : DELIVERY_TOKEN;
const API_HOST = USE_PREVIEW ? "preview.contentful.com" : "cdn.contentful.com";
const API_ROOT = `https://${API_HOST}/spaces/${SPACE_ID}/environments/master`;

type QueryValue = string | number | boolean | readonly string[] | undefined;
type ContentfulCollection = {
  items: any[];
  includes?: Record<string, any[]>;
  [key: string]: any;
};

/**
 * Lightweight in-memory cache to avoid refetching across client routes
 */
type CacheEntry<T> = { value: T; expiry: number };
const cache = new Map<string, CacheEntry<any>>();
const now = () => Date.now();
const defaultTTL = 5 * 60 * 1000; // 5 minutes

function resolveLinks(collection: ContentfulCollection): ContentfulCollection {
  const linkedEntries = Object.values(collection.includes ?? {}).flat();
  const linkedById = new Map(
    linkedEntries.map((entry) => [entry.sys?.id, entry])
  );

  const resolve = (value: any): any => {
    if (Array.isArray(value)) return value.map(resolve);
    if (!value || typeof value !== "object") return value;

    if (value.sys?.type === "Link") {
      const linked = linkedById.get(value.sys.id);
      return linked ? resolve(linked) : value;
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [key, resolve(nested)])
    );
  };

  return {
    ...collection,
    items: collection.items.map(resolve),
  };
}

async function requestEntries(
  query: Record<string, QueryValue>
): Promise<ContentfulCollection> {
  if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Contentful delivery credentials are not configured");
  }

  const params = new URLSearchParams({ access_token: ACCESS_TOKEN });
  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined) return;
    params.set(key, Array.isArray(value) ? value.join(",") : String(value));
  });

  const response = await fetch(`${API_ROOT}/entries?${params}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Contentful request failed (${response.status})`);
  }

  return resolveLinks(await response.json());
}

async function getEntriesCached(
  query: Record<string, QueryValue>,
  ttl = defaultTTL
): Promise<ContentfulCollection> {
  const key = JSON.stringify(query);
  const hit = cache.get(key);
  if (hit && hit.expiry > now()) return hit.value;

  const res = await requestEntries(query);
  cache.set(key, { value: res, expiry: now() + ttl });
  return res;
}


export const fetchExecutives = async () => {
  try {
    const response = await getEntriesCached({
      content_type: "executiveMember",
      order: ["fields.role"],
      include: 1, // resolve photo asset
      // select left broad to avoid missing nested asset fields; optimize with image URL params at render time
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching executive members:", error);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    const response = await getEntriesCached({
      content_type: "event",
      order: ["-sys.createdAt"],
      include: 1,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const fetchBanners = async () => {
  try {
    const response = await getEntriesCached({
      content_type: "banner",
      order: ["fields.page"],
      include: 1,
    });
    return response.items;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
};

// Fetch a single event by its Contentful entry ID
export const fetchEventById = async (id: string) => {
  try {
    const key = `entry:${id}`;
    const hit = cache.get(key);
    if (hit && hit.expiry > now()) return hit.value;

    const response = await requestEntries({
      "sys.id": id,
      include: 1,
      limit: 1,
    });
    const entry = response.items[0] ?? null;
    cache.set(key, { value: entry, expiry: now() + defaultTTL });
    return entry;
  } catch (error) {
    console.error(`Error fetching event ${id}:`, error);
    return null;
  }
};

// export const fetchSplashPage = async () => {
//   try {
//     const response = await client.getEntry('banner')
//     return response;
//   } catch (error) {
//     console.error("Error fetching splash page:", error);
//     return [];
//   }
// }
