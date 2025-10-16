import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const AboutDecorations = ({ children, className }: Props) => (
  <div
    className={clsx(
      "absolute h-full w-[45%] px-10",
      "max-md:w-full max-md:px-0",
      className && className
    )}
  >
    {children}
  </div>
);
