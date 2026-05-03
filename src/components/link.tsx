import { Link as RouterLink } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children?: ReactNode;
};

function isExternal(href: string) {
  return (
    /^(https?:|mailto:|tel:|#)/i.test(href) || href.startsWith("//")
  );
}

export function Link({ href, children, ...rest }: LinkProps) {
  if (isExternal(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RouterLink to={href} {...(rest as any)}>
      {children}
    </RouterLink>
  );
}

export default Link;
