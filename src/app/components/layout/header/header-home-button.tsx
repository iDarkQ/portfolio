import { Button } from "@/app/components/button";
import Link from "next/link";

export const HeaderHomeButton = () => (
  <Button as="nav" className="px-0!">
    <Link href="/" className="px-xxl w-full h-full inline-flex items-center">
      <span className="material-symbols-outlined text-on-primary">home</span>
    </Link>
  </Button>
);
