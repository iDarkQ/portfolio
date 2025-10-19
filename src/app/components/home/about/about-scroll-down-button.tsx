"use client";

import { IconButton } from "@/app/components/icon-button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
      <MdOutlineKeyboardArrowDown className="text-xl material-symbols-outlined" />
    </IconButton>
  );
};
