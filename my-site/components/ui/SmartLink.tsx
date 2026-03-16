import Link from "next/link";

type SmartLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SmartLink({ href, children, className }: SmartLinkProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}