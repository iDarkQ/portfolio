import { AboutCard } from "@/app/components/home/about/about-card";
import { Text } from "@/app/components/text";

export const AboutCardBackend = () => (
  <AboutCard data-aos="fade-left" className="ml-auto">
    <Text as="h2" className="text-start">
      Backend
    </Text>
    <Text as="p" className="text-start">
      I don’t just spin up servers and call it a day ~ I architect systems that
      work reliably under heavy load. From APIs to databases, I’m absolutely
      obsessed with clean structure, security, and scale. Think of me as the one
      making sure everything behind the curtain runs fast, resilient, and
      future‑proof ⚙️
    </Text>
  </AboutCard>
);
