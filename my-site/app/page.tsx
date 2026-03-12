import { contentfulClient } from "@/lib/contentful";

export default async function Home() {
  const response = await contentfulClient.getEntries({
    content_type: "page",
    "fields.slug": "home",
  });

  const page = response.items[0];

  if (!page) {
    return <h1>Home page not found</h1>;
  }

  const heroImage = page.fields.heroImage as any;
  const imageUrl = heroImage?.fields?.file?.url;

  return (
    <main style={{ padding: "40px" }}>
      {imageUrl && (
        <img
          src={`https:${imageUrl}`}
          alt={heroImage?.fields?.title || "Hero image"}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "24px" }}
        />
      )}

      <h1>{page.fields.title as string}</h1>
      <p>{page.fields.body as string}</p>
    </main>
  );
}