"use client";

import { HeaderAnchor } from "@/app/components/layout/header/header-anchor";
import { Button } from "@/app/components/button";
import clsx from "clsx";
import { useState } from "react";
import { Header } from "@/app/components/layout/header/header";

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
          as="div"
          clickable={!expand}
          onClick={() => {
            if (!expand) {
              setExpand((prev) => !prev);
            }
            return false;
          }}
          className={clsx(
            "!w-[120px]",
            expand && "pointer-events-none !w-[600px] bg-white",
            expand &&
              "max-lg:!fixed max-lg:!h-full max-lg:!w-full max-lg:right-0 max-lg:top-0 max-lg:rounded-none max-lg:py-xxl",
            expand && "max-lg:p-16! max-sm:p-4!"
          )}
        >
          <div
            className={clsx(
              "pointer-events-auto flex items-center flex-row gap-5",
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
                "material-symbols-outlined cursor-pointer",
                expand && "!text-black",
                expand && "lg:absolute lg:right-0",
                expand &&
                  "max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:flex max-lg:p-5 max-lg:items-end",
                expand && "max-lg:hidden!"
              )}
            >
              {expand ? "close" : "menu"}
            </span>

            {expand && (
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
                <span className="material-symbols-outlined text-white">
                  close
                </span>
              </Button>
            )}
          </div>
        </Button>
      </div>
    </Header>
  );
};
