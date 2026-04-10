import { SmartLink } from "@/components/ui/SmartLink";
import styles from "./CtaSection.module.css";

export function CtaSection({ section }: { section: any }) {
  return (
    <section
      className={styles.section}
    >
      <h2>{section.fields.title}</h2>

      {section.fields.text && (
        <p>{section.fields.text}</p>
      )}

      {section.fields.buttonLabel && section.fields.buttonLink && (
        <SmartLink href={section.fields.buttonLink} className="buttonLink">
          {section.fields.buttonLabel}
        </SmartLink>
      )}
    </section>
  );
}