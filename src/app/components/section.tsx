import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
    id?: string;
  className?: string;
  extraClassName?: string;
  children?: ReactNode;
}

export const Section = ({ className, id, extraClassName, children }: Props) => (
  <section
    className={clsx(
      "relative py-20",
      className && className
    )}
    id={id}
  >
    <div
      className={clsx(
        "mx-auto",
        "w-[70%] flex flex-col",
        "max-lg:w-[80%] max-sm:w-[90%]",
        extraClassName && extraClassName,
      )}
    >
      {children}
    </div>
  </section>
);
