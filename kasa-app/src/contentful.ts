import { createClient, type EntryCollection, type EntrySkeletonType } from "contentful";

/**
 * Contentful client (uses CDN in prod; optional Preview in dev)
 */
const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string;
const DELIVERY_TOKEN = import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN as string;
const PREVIEW_TOKEN = import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN as string | undefined;
const USE_PREVIEW =
  (import.meta.env.VITE_CONTENTFUL_USE_PREVIEW === "true" || import.meta.env.DEV) && !!PREVIEW_TOKEN;

export const client = createClient({
  space: SPACE_ID,
  accessToken: USE_PREVIEW ? (PREVIEW_TOKEN as string) : DELIVERY_TOKEN,
  host: USE_PREVIEW ? "preview.contentful.com" : "cdn.contentful.com",
  application: "kasa-webapp",
});

/**
 * Lightweight in-memory cache to avoid refetching across client routes
 */
type CacheEntry<T> = { value: T; expiry: number };
const cache = new Map<string, CacheEntry<any>>();
const now = () => Date.now();
const defaultTTL = 5 * 60 * 1000; // 5 minutes

async function getEntriesCached<T extends EntrySkeletonType>(
  query: Record<string, any>,
  ttl = defaultTTL
): Promise<EntryCollection<T>> {
  const key = JSON.stringify(query);
  const hit = cache.get(key);
  if (hit && hit.expiry > now()) return hit.value;

  const res = await client.getEntries<T>(query);
  cache.set(key, { value: res, expiry: now() + ttl });
  return res;
}

/**
 * Helper to build optimized Contentful Image URLs
 * Example: buildImageUrl(url, { fm: "webp", w: 640, h: 360, fit: "fill", q: 70 })
 */
export type ImgParams = {
  w?: number;
  h?: number;
  q?: number;
  fm?: "avif" | "webp" | "jpg" | "png" | "gif";
  fit?: "fill" | "thumb" | "pad" | "crop" | "scale";
  r?: number; // rounded corners
};

const ensureHttps = (u: string) => (u.startsWith("http") ? u : `https:${u}`);

export const buildImageUrl = (url: string, p: ImgParams = {}) => {
  const u = new URL(ensureHttps(url));
  if (p.w) u.searchParams.set("w", `${p.w}`);
  if (p.h) u.searchParams.set("h", `${p.h}`);
  if (p.q) u.searchParams.set("q", `${p.q}`);
  if (p.fit) u.searchParams.set("fit", p.fit);
  if (p.r) u.searchParams.set("r", `${p.r}`);
  u.searchParams.set("fm", p.fm ?? "webp");
  return u.toString();
};

/**
 * Data fetchers
 * Note: include=1 resolves linked assets (e.g., photos) without pulling deep trees.
 */

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
    // single entry fetch is cheap; cache it for consistency
    const key = `entry:${id}`;
    const hit = cache.get(key);
    if (hit && hit.expiry > now()) return hit.value;

    const response = await client.getEntry(id, { include: 1 });
    cache.set(key, { value: response, expiry: now() + defaultTTL });
    return response;
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

