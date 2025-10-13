"use client";
import { useRef } from "react";
import clsx from "clsx";
import { HTMLElement } from "@/app/components/button";

export function useRipple(filled: boolean = true) {
  const ref = useRef<HTMLElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = ref.current;
    if (!element) return;

    const ripple = document.createElement("span");
    ripple.className = clsx(
      "absolute rounded-full [transform:scale(0)] animate-ripple pointer-events-none opacity-100",
      filled ? "bg-black/10" : "bg-primary"
    );

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    element.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return { ref, createRipple };
}