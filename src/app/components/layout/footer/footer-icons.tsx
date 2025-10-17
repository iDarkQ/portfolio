import { IconButton } from "@/app/components/icon-button";
import { Github, Instagram, Linkedin } from "lucide-react";

export const FooterIcons = () => (
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
);
