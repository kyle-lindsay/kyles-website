import Link from "next/link";
import { draftMode } from "next/headers";
import { getNavigation } from "@/lib/getNavigation";
import "./ui.css";

export const metadata = {
  title: "Kyle's Website",
  description: "A site powered by Next.js and Contentful",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();
  const navigation = await getNavigation(isEnabled);
  const links = (navigation?.fields?.links as any[]) || [];

  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
          {links.map((page) => (
            <Link
              key={page.sys.id}
              href={page.fields.slug === "home" ? "/" : `/${page.fields.slug}`}
              style={{ marginRight: "20px" }}
            >
              {page.fields.title}
            </Link>
          ))}
        </nav>

        {children}
      </body>
    </html>
  );
}