import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  expand: boolean;
}

export const HeaderCardInner = ({ children, expand }: Props) => (
  <div
    className={clsx(
      "relative flex items-center flex-row gap-5",
      expand && "w-full flex flex-row items-center justify-center",
      "max-lg:h-full max-lg:w-full max-lg:justify-center max-lg:flex-col-reverse max-lg:text-4xl max-lg:gap-10"
    )}
  >
    {children}
  </div>
);
