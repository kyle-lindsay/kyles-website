import Link from "next/link";
import { draftMode } from "next/headers";
import { getNavigation } from "@/lib/getNavigation";
import styles from "./Header.module.css";
import { Container } from "@/components/layout/Container";

export async function Header() {
  const { isEnabled } = await draftMode();
  const navigation = await getNavigation(isEnabled);
  const links = (navigation?.fields?.links as any[]) || [];

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          {links.map((page) => (
            <Link
              key={page.sys.id}
              href={page.fields.slug === "home" ? "/" : `/${page.fields.slug}`}
              className={styles.link}
            >
              {page.fields.title}
            </Link>
          ))}
        </nav>
      </Container>
      <h1 className={styles.pageTitle}>kylelindsay.dev</h1>
    </header>
  );
}