"use client";

import { HeaderAnchor } from "@/app/components/home/layout/header/header-anchor";
import { Button } from "@/app/components/button";
import clsx from "clsx";
import { useState } from "react";
import { Header } from "@/app/components/home/layout/header/header";

const pages = {
  Contact: "#",
  "About Me": "/about",
  Projects: "/projects",
};

type PageKey = keyof typeof pages;

export const LayoutHeader = () => {
  const [expand, setExpand] = useState(false);

  return (
    <Header>
      <div className="w-full flex flex-row justify-between items-center">
        <Button as="a" href="/">
          <span className="material-symbols-outlined">home</span>
        </Button>
        <Button
          onClick={() => {
            if (!expand) {
              setExpand((prev) => !prev);
            }
          }}
          className={clsx(
            "!w-[120px]",
            expand && "pointer-events-none !w-[600px] bg-white",
            expand &&
              "max-lg:!fixed max-lg:!h-full max-lg:!w-full max-lg:right-0 max-lg:top-0 max-lg:rounded-none max-lg:py-xxl"
          )}
        >
          <div
            className={clsx(
              "pointer-events-auto flex flex-row gap-5",
              expand &&
                "lg:relative w-full flex flex-row items-center justify-center",
              "max-lg:relative max-lg:h-full max-lg:justify-center max-lg:flex-col-reverse max-lg:text-4xl max-lg:gap-10 max-lg:w-full" // max-lg
            )}
          >
            {expand &&
              Object.keys(pages).map((pName, index) => (
                <HeaderAnchor
                  key={index}
                  link={pages[pName as PageKey]}
                  name={pName}
                />
              ))}
            <span
              onClick={() => {
                if (expand) {
                  setExpand(false);
                }
              }}
              className={clsx(
                "material-symbols-outlined",
                expand && "!text-black",
                expand && "lg:absolute lg:right-0",
                expand &&
                  "max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:flex max-lg:p-5 max-lg:items-end" //max lg
              )}
            >
              {expand ? "close" : "menu"}
            </span>
          </div>
        </Button>
      </div>
    </Header>
  );
};
