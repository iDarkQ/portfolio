import { Star } from "@/app/components/shapes/star";
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
        <li key={index} className="relative flex paragraph">
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
