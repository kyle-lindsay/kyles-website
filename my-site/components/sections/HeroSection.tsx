import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import styles from "./HeroSection.module.css";

export function HeroSection({ section }: { section: any }) {
  const backgroundImage = section.fields.backgroundImage as any;
  const imageUrl = backgroundImage?.fields?.file?.url;

  return (
    <Section>
      <Container>
        <div className={styles.hero}>
          {imageUrl && (
            <div className={styles.imageWrap}>
              <Image
                src={`https:${imageUrl}`}
                alt={backgroundImage?.fields?.title || "Hero image"}
                width={1600}
                height={800}
                className={styles.image}
              />
            </div>
          )}

          <div className={styles.content}>
            <h2 className={styles.heading}>{section.fields.headline}</h2>

            {section.fields.subheadline && (
              <p className={styles.subheadline}>{section.fields.subheadline}</p>
            )}

            {section.fields.buttonLabel && section.fields.buttonLink && (
              <Link href={section.fields.buttonLink} className="buttonLink">
                {section.fields.buttonLabel}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}