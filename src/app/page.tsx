import { About } from "@/app/components/home/about/about";
import { Contact } from "@/app/components/home/contact/contact";
import { Hero } from "@/app/components/home/hero/hero";
import { History } from "@/app/components/home/history/history";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <History />
      <Contact />
    </>
  );
}
