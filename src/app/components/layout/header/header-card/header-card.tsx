"use client";

import { Button } from "@/app/components/button";
import { HeaderAnchors } from "@/app/components/layout/header/header-card/header-anchors";
import { HeaderCardAction } from "@/app/components/layout/header/header-card/header-card-action";
import { HeaderCardCloseButton } from "@/app/components/layout/header/header-card/header-card-close-button";
import { HeaderCardInner } from "@/app/components/layout/header/header-card/header-card-inner";
import clsx from "clsx";
import { useState } from "react";

export const HeaderCard = () => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    if (!expand) {
      setExpand((prev) => !prev);
    }
    return false;
  };

  return (
    <Button
      as="div"
      clickable={!expand}
      onClick={handleClick}
      className={clsx(
        "!w-[120px]",
        expand && "!w-[600px] bg-white",
        expand &&
          "max-lg:!fixed max-lg:!h-full max-lg:!w-full max-lg:right-0 max-lg:top-0 max-lg:rounded-none max-lg:p-16! max-sm:p-4!"
      )}
    >
      <HeaderCardInner expand={expand}>
        {expand && <HeaderAnchors setExpand={setExpand} />}
        <HeaderCardAction setExpand={setExpand} expand={expand} />

        {expand && (
          <HeaderCardCloseButton setExpand={setExpand} expand={expand} />
        )}
      </HeaderCardInner>
    </Button>
  );
};
