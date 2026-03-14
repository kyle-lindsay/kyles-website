import { draftMode } from "next/headers";
import { getClient } from "@/lib/contentful";
import { SectionRenderer } from "@/components/SectionRenderer";

export const revalidate = 60;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);

  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    include: 2,
  });

  const page = response.items[0];

  if (!page) {
    return <h1>Page not found</h1>;
  }

  const heroImage = page.fields.heroImage as any;
  const imageUrl = heroImage?.fields?.file?.url;
  const sections = (page.fields.sections as any[]) || [];

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

      {sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </main>
  );
}