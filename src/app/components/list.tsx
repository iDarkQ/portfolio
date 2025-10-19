import { Star } from "@/app/components/shapes/star";
import { darkResume } from "@/app/components/text";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLUListElement> {
  items: string[];
  className?: string;
}

export const List = ({ items, className, ...rest }: Props) => (
  <ul className={clsx(className)} {...rest}>
    {items.map((item, index) => {
      const position = (index % 3) + 1;

      return (
        <li key={index} className={clsx("relative flex paragraph", !darkResume && "text-light-on-background!")}>
          <span
            className={clsx(
              "transition-transform m-2 h-fit",
              position === 2 && "rotate-50",
              position === 3 && "rotate-15"
            )}
          >
            <Star />
          </span>
          {item}
        </li>
      );
    })}
  </ul>
);
