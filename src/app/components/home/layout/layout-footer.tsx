import { Divider } from "@/app/components/divider";
import { IconButton } from "@/app/components/icon-button";
import { Github, Instagram, Linkedin } from "lucide-react";

export const LayoutFooter = () => (
  <footer className="flex flex-col items-center justify-center">
    <Divider infinite={true} />
    <div className="w-[70%] flex flex-col gap-10 py-20">
      <div className="flex flex-row gap-10 justify-center">
        <IconButton as="a" href="https://github.com/iDarkQ/portfolio">
          <Github color="white" size={48} />
        </IconButton>
        <IconButton as="a" href="https://instagram.com/iDarkQ">
          <Instagram color="white" size={48} />
        </IconButton>
        <IconButton as="a" href="https://example.com/">
          <Linkedin color="white" size={48} />
        </IconButton>
      </div>
      <p className="text-2xl text-center">
        Copyright © 2025 Łukasz. All rights reserved.
      </p>
    </div>
  </footer>
);
