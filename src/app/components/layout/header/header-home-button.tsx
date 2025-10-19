import { Button } from "@/app/components/button";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

export const HeaderHomeButton = () => (
  <Button as="nav" className="px-0!">
    <Link href="/" className="px-xxl w-full h-full inline-flex items-center">
      <MdOutlineHome className="material-symbols-outlined text-on-primary" />
    </Link>
  </Button>
);
