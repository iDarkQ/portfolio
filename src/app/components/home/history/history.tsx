import { AboutBanner } from "@/app/components/shapes/about-banner";

export const History = () => (
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
            stylesheets tweaking font sizes and contemplating layouts is where
            you&apos;ll find me (~_^). I&apos;m committed to creating fluent
            user experiences while staying fashionable.
          </p>
        </div>
      </div>
      <div className="flex-2">
        <AboutBanner />
      </div>
    </div>
  </div>
);
