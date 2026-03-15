import { TextSection } from "@/components/sections/TextSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";

const sectionComponents: Record<string, React.ComponentType<{ section: any }>> = {
  heroSection: HeroSection,
  textSection: TextSection,
  ctaSection: CtaSection,
  imageTextSection: ImageTextSection,
};

export function SectionRenderer({ section }: { section: any }) {
  const type = section?.sys?.contentType?.sys?.id;
  const Component = type ? sectionComponents[type] : null;

  if (!Component) {
    return null;
  }

  return <Component section={section} />;
}