import { About } from "@/app/components/home/about/about";
import { Contact } from "@/app/components/home/contact/contact";
import { Hero } from "@/app/components/home/hero/hero";
import { Process } from "@/app/components/home/process/process";
import { Stack } from "@/app/components/home/stack/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Process />
      <Contact />
    </>
  );
}
