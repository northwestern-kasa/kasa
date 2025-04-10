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
      order: ['fields.date'],

    });
    return response.items;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};