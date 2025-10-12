import { ReactNode } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => (
  <div
    className={`rounded-lg p-14 bg-surface-1 text-white gap-5 flex flex-col ${className}`}
    {...props}
  >
    {children}
  </div>
);
