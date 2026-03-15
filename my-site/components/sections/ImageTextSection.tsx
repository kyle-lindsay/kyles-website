import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export function ImageTextSection({ section }: { section: any }) {
    const image = section.fields.image as any;
    const imageUrl = image?.fields?.file?.url;
    const imageAlt = image?.fields?.title || section.fields.heading || "Section image";
    const imagePosition = section.fields.imagePosition || "left";

    const imageBlock = imageUrl ? (
        <div style={{ flex: 1 }}>
            <Image
            src={`https:${imageUrl}`}
            alt={imageAlt}
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto" }}
            />
        </div>
    ) : null;

    const textBlock = (
        <div style={{flex: 1}}>
            {section.fields.heading && (
            <h2 style={{ marginBottom: "16px" }}>
                {section.fields.heading}
            </h2>
            )}

            {section.fields.body && (
                <div style={{ marginBottom: "20px" }}>
                    {documentToReactComponents(section.fields.body)}
                </div>
            )}

            {section.fields.buttonLabel && section.fields.buttonLink && (
                <Link href={section.fields.buttonLink}>
                    {section.fields.buttonLabel}
                </Link>
            )}
        </div>
    );

    return (
    <section>
        <div
        style={{
            display: "flex",
            flexDirection: imagePosition === "right" ? "row-reverse" : "row",
            gap: "32px",
            alignItems: "center",
        }}
        >
        {imageBlock}
        {textBlock}
        </div>
    </section>
    );
}