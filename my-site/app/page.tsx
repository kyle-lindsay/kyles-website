import { draftMode } from "next/headers";
import { getClient } from "@/lib/contentful";
import { SectionRenderer } from "@/components/SectionRenderer";
import { TitleEffect } from "@/components/ui/useTitleEffect";

export const revalidate = 60;

export async function generateMetadata() {
  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);

  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": "home",
    include: 2,
  });

  const page = response.items[0];

  if (!page) {
    return {
      title: "Home",
      description: "",
    };
  }

  return {
    title: (page.fields.seoTitle as string) || (page.fields.title as string),
    description: (page.fields.seoDescription as string) || "",
  };
}

export default async function Home() {
  const { isEnabled } = await draftMode();
  const client = getClient(isEnabled);

  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": "home",
    include: 2,
  });

  const page = response.items[0];

  if (!page) {
    return <h1>Home page not found</h1>;
  }

  const heroImage = page.fields.heroImage as any;
  const imageUrl = heroImage?.fields?.file?.url;
  const sections = (page.fields.sections as any[]) || [];

  return (
    <main style={{ padding: "40px" }}>
      
  
    <TitleEffect
      text={page.fields.title as string}
      duration={3000}
    />

      {imageUrl && (
        <img
          src={`https:${imageUrl}`}
          alt={heroImage?.fields?.title || "Hero image"}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "24px" }}
        />
      )}

      {sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </main>
  );
}