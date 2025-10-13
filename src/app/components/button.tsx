"use client"

import React from "react";
import clsx from "clsx";
import { useRipple } from "@/app/components/use-ripple";

export type HTMLElement = HTMLButtonElement & HTMLDivElement & HTMLAnchorElement;

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  filled?: boolean;
  as?: "button" | "a" | "div";
  href?: string;
  target?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  icon,
  className,
  onClick,
  filled = true,
  as = "button",
  href,
  target,
  ...props
}: ButtonProps) => {
  const Tag = as;
  const { ref, createRipple } = useRipple(filled);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    createRipple(e);
    onClick?.();
  };

  return (
    <Tag
      {...props}
      ref={ref}
      href={href}
      target={target}
      onClick={handleClick}
      className={clsx(
        "flex items-center justify-center relative overflow-hidden cursor-pointer",
        "text-xl font-[475] active:font-normal",
        "transition-[border-radius,font-weight,background-color,width] duration-200 ease-[cubic-bezier(.2,0,0,1)]",
        "hover:brightness-105",
        !icon && [
          filled
            ? "bg-primary text-on-primary"
            : "bg-transparent text-white border-1 border-primary",
          "text-on-primary rounded-xxl active:rounded-md px-xxl h-20 w-fit",
        ],
        icon && [
          filled ? "bg-tertiary-container" : "bg-transparent",
          "text-on-surface-variant rounded-md w-[var(--icon-btn-height)] h-[var(--icon-btn-height)]",
        ],
        className
      )}
    >
      {children}
    </Tag>
  );
};