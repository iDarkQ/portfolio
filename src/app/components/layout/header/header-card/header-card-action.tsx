import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { MdClose, MdMenu } from "react-icons/md";

interface Props {
  expand: boolean;
  setExpand: Dispatch<SetStateAction<boolean>>;
}

export const HeaderCardAction = ({ expand, setExpand }: Props) => {
  const Component = expand ? MdClose : MdMenu;
  return (
    <Component
      onClick={() => {
        if (expand) {
          setExpand(false);
        }
      }}
      className={clsx(
        "material-symbols-outlined cursor-pointer",
        expand && "!text-black",
        expand && "lg:absolute lg:right-0",
        expand &&
          "max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:flex max-lg:p-5 max-lg:items-end",
        expand && "max-lg:hidden!"
      )}
    />
  );
};
