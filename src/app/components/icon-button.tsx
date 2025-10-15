"use client"

import { HTMLElement } from "@/app/components/button";
import { useRipple } from "@/app/components/use-ripple";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  as?: "button" | "a" | "div";
  href?: string;
  sameTab?: boolean;
  filled?: boolean;
  className?: string;
}

export const IconButton = ({
  children,
  onClick,
  as = "button",
  href,
  sameTab,
  filled,
  className,
}: Props) => {
  const Tag = as;
  const { ref, createRipple } = useRipple(filled);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    createRipple(e);

    onClick?.();
  };

  return (
    <Tag
      ref={ref}
      onClick={handleClick}
      href={href}
      target={!sameTab ? "_blank" : undefined}
      className={clsx(
        "flex items-center justify-center overflow-hidden cursor-pointer",
        "text-xl font-[475] active:font-normal",
        "transition-[border-radius,font-weight,background-color,width] duration-200 ease-[cubic-bezier(.2,0,0,1)]",
        "hover:brightness-105",
        "p-3",
        filled ? "bg-tertiary-container" : "bg-transparent",
        "text-on-surface-variant rounded-md w-[var(--icon-btn-height)] h-[var(--icon-btn-height)]",
        className && className
      )}
    >
      {children}
    </Tag>
  );
};
