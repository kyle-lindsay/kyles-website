import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export function TextSection({ section }: { section: any }) {
  return (
    <section style={{ marginTop: "40px" }}>
      <h2>{section.fields.heading}</h2>
      <div>{documentToReactComponents(section.fields.content)}</div>
    </section>
  );
}