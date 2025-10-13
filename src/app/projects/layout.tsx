"use client";

import { Button } from "@/app/components/button";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 10) {
        setExpand(true);
      } else {
        setExpand(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <header className="z-999 fixed w-full h-auto bg-transparent p-xxl">
        <div className="relative flex flex-row justify-between items-center">
          <Button as="a" href="/about" target="_blank">
            <span className="material-symbols-outlined">home</span>
          </Button>
          <Button
            onClick={() => {
              if (!expand) {
                setExpand((prev) => !prev);
              }
            }}
            className={clsx(
              "!absolute right-0 top-0 !w-[120px]",
              expand && "pointer-events-none !w-[600px] bg-white"
            )}
          >
            <div className="pointer-events-auto flex flex-row gap-5">
              {expand && (
                <>
                  <a href="#contact" className="text-black!">
                    Contact
                  </a>
                  <a href="#" className="text-black!">
                    About Me
                  </a>
                  <a href="#" className="text-black!">
                    Projects
                  </a>
                </>
              )}
              {/* <div
              onClick={() => setExpand(false)}
              className="material-symbols-outlined text-black!"
            >
              menu
            </div> */}
              <span
                onClick={() => {
                  if (expand) {
                    setExpand(false);
                  }
                }}
                className={clsx(
                  "material-symbols-outlined",
                  expand && "!text-black"
                )}
              >
                menu
              </span>
            </div>
          </Button>
          {/* <div
            className={`absolute right-0 bg-white w-[auto] ${
              expand ? "flex" : "hidden"
            } justify-end items-center px-5 gap-5 h-[var(--btn-height)] rounded-xxl`}
          >

          </div> */}
        </div>
      </header>
      {children}
    </div>
  );
}
