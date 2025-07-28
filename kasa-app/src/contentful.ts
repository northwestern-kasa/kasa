import { createClient } from "contentful";

export const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_ACCESS_TOKEN,
});

export const fetchExecutives = async () => {
  try {
    const response = await client.getEntries({
      content_type: "executiveMember",
      order: ['fields.role'],

    });
    // console.log(response.items)
    return response.items;
  } catch (error) {
    console.error("Error fetching executive members:", error);
    return [];
  }
};

export const fetchEvents = async () => {
  try {
    const response = await client.getEntries({
      content_type: "event",
      order: ['-sys.createdAt'],

    });
    return response.items;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const fetchBanners = async () => {
  try {
    const response = await client.getEntries({
      content_type: "banner",
      order: ['fields.page'],

    });
    return response.items;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
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

