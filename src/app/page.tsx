import { About } from "@/app/components/home/about/about";
import { Contact } from "@/app/components/home/contact/contact";
import { Hero } from "@/app/components/home/hero/hero";
import { Process } from "@/app/components/home/process/process";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Process />
      <Contact />
    </>
  );
}
