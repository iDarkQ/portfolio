import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Header = ({ children, className }: Props) => (
  <header
    className={clsx(
      "z-999 fixed w-full h-auto bg-transparent p-16",
      "max-sm:p-4",
      className && className
    )}
  >
    {children}
  </header>
);
