import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export function SectionRenderer({ section }: { section: any }) {
  const type = section?.sys?.contentType?.sys?.id;

  switch (type) {
    case "textSection":
      return (
        <section style={{ marginTop: "40px" }}>
          <h2>{section.fields.heading}</h2>
          <div>{documentToReactComponents(section.fields.content)}</div>
        </section>
      );

    default:
      return null;
  }
}