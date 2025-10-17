import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  id?: string;
  as?: "section" | "div";
  className?: string;
  extraClassName?: string;
  children?: ReactNode;
  first?: boolean;
}

export const Section = ({
  as = "section",
  className,
  id,
  extraClassName,
  children,
  first = false,
}: Props) => {
  const Component = as;

  return (
    <Component
      className={clsx(
        "relative py-40 overflow-hidden",
        "max-lg:py-35 max-sm:py-25",
        className && className
      )}
      id={id}
    >
      <div
        className={clsx(
          "mx-auto",
          "w-[70%] flex flex-col",
          "max-lg:w-[80%] max-sm:w-[90%]",
          first && "btn-pt",
          extraClassName && extraClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
};
