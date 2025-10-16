import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  id?: string;
}

export const AboutPart = ({ id, children }: Props) => (
  <div
    id={id}
    className="relative w-full flex flex-row scroll-my-10 items-stretch"
  >
    {children}
  </div>
);
