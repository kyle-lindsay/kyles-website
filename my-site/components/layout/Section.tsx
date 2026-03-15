import styles from "./Section.module.css";

export function Section({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}