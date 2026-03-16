import { SmartLink } from "@/components/ui/SmartLink";

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
        <SmartLink href={section.fields.buttonLink} className="buttonLink">
          {section.fields.buttonLabel}
        </SmartLink>
      )}
    </section>
  );
}