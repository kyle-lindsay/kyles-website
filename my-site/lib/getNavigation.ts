import { getClient } from "@/lib/contentful";

export async function getNavigation(preview = false) {
  const client = getClient(preview);

  const response = await client.getEntries({
    content_type: "navigation",
    include: 2,
  });

  return response.items[0];
}