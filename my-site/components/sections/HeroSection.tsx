import Link from "next/link";
import Image from "next/image";

export function HeroSection({ section }: { section: any }) {
  const backgroundImage = section.fields.backgroundImage as any;
  const imageUrl = backgroundImage?.fields?.file?.url;

  return (
    <section style={{ marginTop: "40px", marginBottom: "40px" }}>
      {imageUrl && (
        <Image
          src={`https:${imageUrl}`}
          alt={backgroundImage?.fields?.title || "Hero image"}
          width={1600}
          height={800}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
        />
      )}

      <h2 style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
        {section.fields.headline}
      </h2>

      {section.fields.subheadline && (
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          {section.fields.subheadline}
        </p>
      )}

      {section.fields.buttonLabel && section.fields.buttonLink && (
        <Link
          href={section.fields.buttonLink}
          style={{
            display: "inline-block",
            padding: "12px 20px",
            border: "1px solid #000",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          {section.fields.buttonLabel}
        </Link>
      )}
    </section>
  );
}