import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export const AboutDecorationItem = ({ className, children }: Props) => (
  <div data-aos="flip-up" className={clsx("absolute", className && className)}>
    <svg
      viewBox="0 0 100 125"
      className="w-50 h-50"
      fill="var(--color-primary-80)"
    >
      {children}
    </svg>
  </div>
);
