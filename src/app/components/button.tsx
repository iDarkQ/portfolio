"use client";
import React, { useRef } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  filled?: boolean;
}

export const Button = ({ children, icon, className, filled = true, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    // Create span
    const ripple = document.createElement("span");

    // Tailwind classes for ripple
    // Remove hidden class to show the ripple
    ripple.className = `
      absolute rounded-full [transform:scale(0)] bg-${filled ? "black/10" : "primary"}
      animate-ripple pointer-events-none opacity-100
    `;

    // absolute rounded-full bg-black/10 scale-0 animate-ripple pointer-events-none

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <button
    {...props}
      ref={buttonRef}
      onClick={createRipple}
      className={`
        flex items-center justify-center
        relative overflow-hidden
        
        cursor-pointer
        text-xl font-[475] active:font-normal
        transition-[border-radius,font-weight] duration-200 ease-[cubic-bezier(.2,0,0,1)]
        hover:brightness-105
        ${
          !icon
            ? `${filled ? "bg-primary text-on-primary" : "bg-transparent text-white border-1 border-primary"} text-on-primary rounded-xxl active:rounded-md px-xxl h-20 w-fit`
            : `${filled ? "bg-tertiary-container" : "bg-transparent"} text-on-surface-variant rounded-md w-[var(--icon-btn-height)] h-[var(--icon-btn-height)]`
        }
        ${className && className}
      `}
    >
      {children}
    </button>
  );
};
