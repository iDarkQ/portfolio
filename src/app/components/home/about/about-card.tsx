import { Card } from "@/app/components/card";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const AboutCard = ({ className, children }: Props) => (
  <Card
    className={clsx(
      "w-[55%] max-md:w-[100%]! h-auto flex flex-col justify-start gap-5",
      className && className
    )}
  >
    {children}
  </Card>
);
