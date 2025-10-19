"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { FourSidedCookie } from "@/app/components/shapes/four-sided-cookie";
import { SixSidedCookie } from "@/app/components/shapes/six-sided-cookie";
import { SevenSidedCookie } from "@/app/components/shapes/seven-sided-cookie";
import portfolioPic from "@/assets/images/portfolio.jpg";

gsap.registerPlugin(MorphSVGPlugin);

export const HeroImageBlob = () => {
  const clipPathRef = useRef<SVGPathElement | null>(null); // path inside clipPath
  const strokeRef = useRef<SVGPathElement | null>(null); // visible stroked path
  const fourRef = useRef<SVGPathElement | null>(null);
  const sixRef = useRef<SVGPathElement | null>(null);
  const sevenRef = useRef<SVGPathElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (
      !clipPathRef.current ||
      !strokeRef.current ||
      !fourRef.current ||
      !sixRef.current ||
      !sevenRef.current
    )
      return;

    const clipPathEl = clipPathRef.current;
    const strokeEl = strokeRef.current;
    const four = fourRef.current;
    const six = sixRef.current;
    const seven = sevenRef.current;

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { duration: 0.8, ease: "power4.out" },
    });

    tl.to([clipPathEl, strokeEl], { morphSVG: six })
      .to([clipPathEl, strokeEl], { morphSVG: seven })
      .to([clipPathEl, strokeEl], { morphSVG: four });

    if (svgRef.current) {
      gsap.to(svgRef.current, {
        transformOrigin: "50% 50%",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="h-[100%] max-h-100">
      <svg ref={svgRef} viewBox="0 0 24 24" width="auto" height="100%">
        <defs>
          <clipPath id="blobClip">
            <FourSidedCookie ref={clipPathRef} fill="#000" />
          </clipPath>
        </defs>

        <image
          href={portfolioPic.src}
          width="24"
          height="24"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#blobClip)"
          className="z-10"
        />

        <FourSidedCookie
          ref={strokeRef}
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pointerEvents: "none" }}
        />
        <FourSidedCookie
          ref={fourRef}
          fill="none"
          style={{ display: "none" }}
        />
        <SixSidedCookie ref={sixRef} fill="none" style={{ display: "none" }} />
        <SevenSidedCookie
          ref={sevenRef}
          fill="none"
          style={{ display: "none" }}
        />
      </svg>
    </div>
  );
};
