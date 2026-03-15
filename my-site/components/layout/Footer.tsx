import styles from "./Footer.module.css";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <p className={styles.text}>© 2026 Kyle Lindsay</p>
      </Container>
    </footer>
  );
}