import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Footer = ({ children }: Props) => (
  <footer className="flex flex-col items-center justify-center">
    {children}
  </footer>
);
