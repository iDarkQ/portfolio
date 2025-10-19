import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  as?: "p" | "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
}

export const darkResume = true;

const baseHeading =
  (darkResume ? "text-on-surface-variant" : "text-neutral-10") + " font-[475]";
const styles = {
  p: clsx(
    (darkResume ? "text-neutral-90" : "text-light-on-surface-variant") +
      " paragraph"
  ),

  h1: clsx(
    `text-8xl ${baseHeading} leading-[0.75]`, // normal
    `max-xs:text-5xl max-sm:text-6xl max-lg:text-7xl` // normal
  ),
  h2: clsx(
    `text-5xl ${baseHeading}`, // normal
    "max-xs:text-2xl max-sm:text-3xl max-lg:text-4xl"
  ),
  h3: clsx(
    `text-3xl ${baseHeading}`, // normal
    "max-xs:text-lt max-sm:text-xl max-lg:text-2xl"
  ),
  h4: clsx(
    `text-2xl ${baseHeading}`, // normal
    "max-xs:text-md max-sm:text-lg max-lg:text-xl"
  ),
};

export const Text = ({ as = "p", children, className }: Props) => {
  const Component = as;
  return (
    <Component className={clsx(styles[as], className && className)}>
      {children}
    </Component>
  );
};
