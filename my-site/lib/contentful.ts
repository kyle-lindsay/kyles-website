import { createClient } from "contentful";

export function getClient(preview = false) {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: preview
      ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!
      : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!,
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  });
}