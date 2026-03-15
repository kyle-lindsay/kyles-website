import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import styles from "./ImageTextSection.module.css";

export function ImageTextSection({ section }: { section: any }) {
  const image = section.fields.image as any;
  const imageUrl = image?.fields?.file?.url;
  const imageAlt = image?.fields?.title || section.fields.heading || "Section image";
  const imagePosition = section.fields.imagePosition || "left";

  const layoutClass =
    imagePosition === "right" ? styles.layoutReverse : styles.layout;

  const imageBlock = imageUrl ? (
    <div className={styles.imageWrap}>
      <Image
        src={`https:${imageUrl}`}
        alt={imageAlt}
        width={1200}
        height={800}
        className={styles.image}
      />
    </div>
  ) : null;

  const textBlock = (
    <div className={styles.text}>
      {section.fields.heading && (
        <h2 className={styles.heading}>{section.fields.heading}</h2>
      )}

      {section.fields.body && (
        <div className={styles.body}>
          {documentToReactComponents(section.fields.body)}
        </div>
      )}

      {section.fields.buttonLabel && section.fields.buttonLink && (
        <Link href={section.fields.buttonLink} className="buttonLink">
          {section.fields.buttonLabel}
        </Link>
      )}
    </div>
  );

  return (
    <Section>
      <Container>
        <div className={layoutClass}>
          {imageBlock}
          {textBlock}
        </div>
      </Container>
    </Section>
  );
}