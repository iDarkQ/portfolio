import { Card } from "@/app/components/card";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const AboutCard = ({ className, children, ...rest }: Props) => (
  <Card
    {...rest}
    className={clsx(
      "w-[55%] max-md:w-[100%]! h-auto flex flex-col justify-start gap-5",
      className && className
    )}
  >
    {children}
  </Card>
);
