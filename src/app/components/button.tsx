"use client";

import React from "react";
import clsx from "clsx";
import { useRipple } from "@/app/components/use-ripple";

export type HTMLElement = HTMLButtonElement &
  HTMLDivElement &
  HTMLAnchorElement;

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  filled?: boolean;
  as?: "button" | "a" | "div" | "nav";
  href?: string;
  target?: string;
  onClick?: () => void | boolean;
  clickable?: boolean;
}

export const Button = ({
  children,
  className,
  onClick,
  filled = true,
  as = "button",
  href,
  target,
  clickable = true,
  ...props
}: ButtonProps) => {
  const Tag = as;
  const { ref, createRipple } = useRipple(filled);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!clickable) return;
    if (!onClick?.()) return;
    createRipple(e);
  };

  return (
    <Tag
      {...props}
      ref={ref}
      href={href}
      target={target}
      onClick={handleClick}
      className={clsx(
        "flex items-center justify-center relative overflow-hidden w-fit",
        "text-xl font-[475] text-white",
        "rounded-xxl px-xxl btn-h max-lg:px-lg",
        "transition-[border-radius,font-weight,background-color,width, height] duration-200 ease-[cubic-bezier(.2,0,0,1)]",
        filled ? "bg-primary" : "bg-transparent border-1 border-primary",
        clickable && [
          "cursor-pointer",
          "active:font-normal",
          "hover:brightness-105 active:rounded-md",
        ],
        !clickable && "cursor-default select-none",
        className
      )}
    >
      {children}
    </Tag>
  );
};