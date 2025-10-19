import { AboutCard } from ".";
import { Text } from "@/app/components/text";

export const AboutCardBackend = () => (
  <AboutCard data-aos="fade-left" className="ml-auto">
    <Text as="h2" className="text-start text-primary-80">
      Backend
    </Text>
    <Text as="p" className="text-start">
      I don’t just spin up backends and call it a day ~ I assemble systems that
      work reliably under load. From APIs to databases, I’m absolutely obsessed
      with clean structure, security and scale. Think of me as the one making
      sure everything behind the curtain runs fast, resilient, and especially
      future‑proof ⚙️
    </Text>
  </AboutCard>
);
