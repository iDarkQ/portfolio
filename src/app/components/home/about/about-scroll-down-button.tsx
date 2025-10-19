"use client";

import { IconButton } from "@/app/components/icon-button";

export const AboutScrollDownButton = () => {
  const scrollDown = () => {
    const design = document.getElementById("about");
    design?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <IconButton
      className="animate-bounce max-lg:hidden"
      filled
      onClick={scrollDown}
    >
      <span className="text-xl material-symbols-outlined">
        keyboard_arrow_down
      </span>
    </IconButton>
  );
};
