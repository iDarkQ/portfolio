"use client";
import { ReactNode } from "react";
import clsx from "clsx";
import { useRipple } from "@/app/components/use-ripple";
import { HTMLElement } from "@/app/components/button";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  clickable?: boolean;
  href?: string;
  as?: "button" | "a" | "div";
}

export const Card = ({
  children,
  className,
  clickable = false,
  as = "div",
  href,
  ...props
}: CardProps) => {
  const Tag = as;
  const { ref, createRipple } = useRipple(true);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (clickable) {
      createRipple(e);
      props.onClick?.(e);
    }
  };

  return (
    <Tag
      ref={ref}
      onClick={handleClick}
      href={href}
      target="_blank"
      className={clsx(
        "rounded-lg p-14 bg-surface-1 text-white gap-5 flex flex-col relative overflow-hidden",
        "transition-[border-radius,background-color] duration-200 ease-[cubic-bezier(.2,0,0,1)]",
        "max-sm:p-8",
        clickable && "active:rounded-xxl active:bg-secondary-container cursor-pointer hover:brightness-105",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
