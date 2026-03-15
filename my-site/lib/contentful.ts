import { createClient } from "contentful";

export function getClient(preview = false) {
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!process.env.CONTENTFUL_SPACE_ID) {
    throw new Error("Missing CONTENTFUL_SPACE_ID");
  }

  if (!accessToken) {
    throw new Error(
      preview
        ? "Missing CONTENTFUL_PREVIEW_ACCESS_TOKEN"
        : "Missing CONTENTFUL_DELIVERY_ACCESS_TOKEN"
    );
  }

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken,
    host: preview ? "preview.contentful.com" : "cdn.contentful.com",
  });
}