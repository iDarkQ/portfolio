import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";
import { Divider } from "@/app/components/divider";
import { AboutBanner } from "@/app/components/shapes/about-banner";
import { BottomLeftCorner } from "@/app/components/shapes/bottom-left-corner";
import { ManyIcons } from "@/app/components/shapes/many-icons";
import MorphBlob from "@/app/components/shapes/test";
import { TopRightCorner } from "@/app/components/shapes/top-right-corner";
import { ZigzagLine } from "@/app/components/shapes/zigzag-line";
import { ZigzagLineHorizontal } from "@/app/components/shapes/zigzag-line-horizontal";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="relative bg-[linear-gradient(90deg,var(--color-surface-1)_67%,var(--color-primary)_33%)] min-h-180 flex flex-col items-center justify-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-10 left-10"
        >
          <BottomLeftCorner />
        </svg>
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-10 right-10"
        >
          <TopRightCorner />
        </svg>
        <div className="w-[70%] flex flex-row items-stretch justify-between">
          <div className="flex-1 gap-7 flex flex-col">
            <h1>
              Full-Stack Developer<span className="text-white">.</span>
            </h1>

            <Divider />
            <p className="text-2xl">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
            <div className="flex flex-row gap-4">
              <p className="text-sm">
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
              <p className="text-sm">
                Proven experience building successful products for clients
                across several countries.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <MorphBlob />
            <ManyIcons />
            {/* <div className="aspect-square bg-pink-50 h-64 rounded-xxl flex items-center justify-center"></div> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-20 py-20">
        <Button icon className="animate-bounce">
          <span className="text-xl material-symbols-outlined ">
            keyboard_arrow_down
          </span>
        </Button>
        <div className="w-[70%] flex flex-col gap-10">
          <div className="w-full flex flex-row">
            <Card
              data-aos="fade-right"
              className="w-[55%] h-auto flex flex-col justify-start gap-5"
            >
              <h2>Design</h2>
              <p className="text-2xl">
                I&apos;m probably not the typical designer positioned behind an
                Illustrator artboard adjusting pixels, but I design. Immersed in
                stylesheets tweaking font sizes and contemplating layouts is
                where you&apos;ll find me (~_^). I&apos;m committed to creating
                fluent user experiences while staying fashionable.
              </p>
            </Card>
            <div className="w-[45%] flex flex-col justify-around items-start px-10">
              <div data-aos="flip-up">
                <svg
                  viewBox="0 0 100 125"
                  className="w-50 h-50"
                  fill="var(--color-primary-80)"
                >
                  <ZigzagLineHorizontal />
                </svg>
              </div>
              <div
                data-aos="flip-up"
                className="w-full flex justify-center rotate-45"
              >
                <svg
                  viewBox="0 0 100 125"
                  className="w-50 h-50"
                  fill="var(--color-primary-80)"
                >
                  <ZigzagLine />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-[45%] flex flex-col justify-around items-start px-10">
              <div
                data-aos="flip-up"
                className="w-full flex justify-center rotate-45"
              >
                <svg
                  viewBox="0 0 100 125"
                  className="w-50 h-50"
                  fill="var(--color-primary-80)"
                >
                  <ZigzagLineHorizontal />
                </svg>
              </div>
              <div data-aos="flip-up">
                <svg
                  viewBox="0 0 100 125"
                  className="w-50 h-50"
                  fill="var(--color-primary-80)"
                >
                  <ZigzagLine />
                </svg>
              </div>
            </div>
            <Card
              data-aos="fade-left"
              className="w-[55%] h-auto flex flex-col justify-start gap-5"
            >
              <h2>Engineering</h2>
              <p className="text-2xl">
                In building JavaScript applications, I&apos;m equipped with just
                the right tools, and can absolutely function independently of
                them to deliver fast, resilient solutions optimized for scale —
                performance and scalability are priorities on my radar.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="bg-primary min-h-180 flex flex-col items-center justify-center gap-20 py-10">
        <div className="w-[70%] flex flex-row gap-20">
          <div className="flex-1">
            <div
              data-aos="fade-right"
              className="h-auto flex flex-col justify-start gap-5"
            >
              <h2 className="text-white!">Over the years,</h2>
              <p className="text-2xl">
                I&apos;m probably not the typical designer positioned behind an
                Illustrator artboard adjusting pixels, but I design. Immersed in
                stylesheets tweaking font sizes and contemplating layouts is
                where you&apos;ll find me (~_^). I&apos;m committed to creating
                fluent user experiences while staying fashionable.
              </p>
            </div>
          </div>
          <div className="flex-2">
            <AboutBanner />
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex flex-col items-center justify-center gap-20 min-h-180 py-20"
      >
        <div className="w-[70%] flex flex-col gap-10">
          <h2 data-aos="fade-down" className="text-center">
            Send Me A Message!
          </h2>
          <p data-aos="flip-up" className="text-2xl text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <form
            action="/search"
            className="w-full flex flex-col items-center gap-10"
          >
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
              <div
                data-aos="fade-right"
                className="flex flex-col-reverse gap-1"
              >
                <input name="name" placeholder="Enter your name" />
                <label htmlFor="name">Your name</label>
              </div>
              <div data-aos="fade-left" className="flex flex-col-reverse gap-1">
                <input name="email" placeholder="Enter your email" />
                <label htmlFor="email">Your email</label>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col-reverse col-span-2 gap-1"
              >
                <textarea name="message" placeholder="Enter your message" />
                <label htmlFor="message">Your message</label>
              </div>
            </div>
            <Button data-aos="fade-up" filled={false} itemType="submit">
              Send!
            </Button>
          </form>
        </div>
      </div>
      <footer className="bg-tertiary-container flex flex-col items-center justify-center gap-20 py-20">
        <div className="w-[70%] flex flex-col gap-10">
          <div className="flex flex-row gap-10 justify-center">
            <Github color="white" size={48} />
            <Instagram color="white" size={48} />
            <Linkedin color="white" size={48} />
          </div>
          <p className="text-2xl text-center">
            Copyright © 2025 Łukasz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
