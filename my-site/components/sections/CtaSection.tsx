import Link from "next/link";

export function CtaSection({ section }: { section: any }) {
  return (
    <section
      style={{
        marginTop: "40px",
        padding: "32px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ marginBottom: "12px" }}>{section.fields.title}</h2>

      {section.fields.text && (
        <p style={{ marginBottom: "20px" }}>{section.fields.text}</p>
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