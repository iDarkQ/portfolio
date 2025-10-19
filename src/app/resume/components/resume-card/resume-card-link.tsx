import { darkResume, Text } from "@/app/components/text";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  children?: string;
  link: string;
}

export const ResumeCardLink = ({children, link}: Props) => (
  <Text className={clsx(darkResume ? "text-primary-80!" : "text-light-primary", "font-medium underline")}>
    <Link target="_blank" href={link}>{children}</Link>
  </Text>
);
