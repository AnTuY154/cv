import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  download?: boolean;
};

const variantClasses = {
  primary: "button button-primary",
  secondary: "button button-secondary",
  quiet: "button button-quiet",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  className,
  ariaLabel,
  download,
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );
  const classNameValue = cn(variantClasses[variant], className);

  if (href.startsWith("/") || href.startsWith("#")) {
    return (
      <Link className={classNameValue} href={href} aria-label={ariaLabel} download={download}>
        {content}
      </Link>
    );
  }

  const isEmail = href.startsWith("mailto:");
  return (
    <a
      className={classNameValue}
      href={href}
      aria-label={ariaLabel}
      download={download}
      rel={isEmail ? undefined : "noreferrer"}
      target={isEmail ? undefined : "_blank"}
    >
      {content}
    </a>
  );
}
