import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import styles from "./HeaderSection.module.css";

export function HeaderSection({ section }: { section: any }) {
    console.log("rendering");
    return (
        <Section>
            <Container>
                <div className={styles.header}>
                    <h2>{section.fields.title}</h2>
                    <p>{section.fields.text}</p>
                </div>
            </Container>
        </Section>
    );
}