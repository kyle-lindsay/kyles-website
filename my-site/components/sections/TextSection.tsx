import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import styles from "./TextSection.module.css";

export function TextSection({ section }: { section: any }) {
  return (
    <Section>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.heading}>{section.fields.heading}</h2>
          <div className={styles.body}>
            {documentToReactComponents(section.fields.content)}
          </div>
        </div>
      </Container>
    </Section>
  );
}