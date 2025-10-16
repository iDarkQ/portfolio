import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  as?: "p" | "h1" | "h2";
  children: ReactNode;
  className?: string;
}

const baseHeading = "text-[var(--color-primary)] font-[475] leading-[0.75]";
const styles = {
  p: clsx(
    "text-white paragraph",
  ),

  h1: clsx(
    `text-8xl ${baseHeading}`, // normal
    `max-xs:text-5xl max-sm:text-6xl max-lg:text-7xl` // normal
  ),
  h2: clsx(
    `text-5xl ${baseHeading}`, // normal
    "max-xs:text-2xl max-sm:text-3xl max-lg:text-4xl"
  ),
};

export const Text = ({ as = "p", children, className }: Props) => {
  const Component = as;
  return (
    <Component
      className={clsx(styles[as], className && className)}
    >
      {children}
    </Component>
  );
};
