import { Button } from "@/app/components/button";
import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}

export const HeaderCardCloseButton = ({ expand, setExpand }: Props) => (
  <Button
    onClick={() => {
      if (expand) {
        setExpand(false);
      }
    }}
    className={clsx(
      "w-[120px]! cursor-pointer flex items-center! justify-center!",
      expand && "!text-black",
      expand && "lg:absolute lg:right-0",
      expand &&
        "max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:flex max-lg:items-end",
      expand && "lg:hidden!"
    )}
  >
    <MdClose className="material-symbols-outlined text-on-primary" />
  </Button>
);
