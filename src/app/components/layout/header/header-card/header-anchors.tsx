import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const pages = {
  Contact: "/#contact",
  Resume: "/resume",
  Projects: "/projects",
};

type PageKey = keyof typeof pages;

interface Props {
  setExpand: Dispatch<SetStateAction<boolean>>;
}

export const HeaderAnchors = ({ setExpand }: Props) =>
  Object.keys(pages).map((pName, index) => (
    <nav key={index}>
      <Link
        data-aos="fade-left"
        data-aos-duration="200"
        href={pages[pName as PageKey]}
        onClick={() => setExpand(false)}
        className={clsx("text-black!", "max-lg:p-5")}
      >
        {pName}
      </Link>
    </nav>
  ));
