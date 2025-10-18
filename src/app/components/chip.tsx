import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Chip = ({ children, className, ...rest }: ChipProps) => (
  <div
    {...rest}
    className={clsx(
      "h-[var(--chip-container-height)] bg-secondary-container text-neutral-90 text-sm w-fit items-center justify-center flex rounded-xsm p-2",
      className && className
    )}
  >
    {children}
  </div>
);
