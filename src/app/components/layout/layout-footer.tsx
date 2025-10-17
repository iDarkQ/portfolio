import { Divider } from "@/app/components/divider";
import { Footer } from "@/app/components/layout/footer/footer";
import { FooterIcons } from "@/app/components/layout/footer/footer-icons";
import { FooterText } from "@/app/components/layout/footer/footer-text";
import { Section } from "@/app/components/section";

export const LayoutFooter = () => (
  <Footer>
    <Divider infinite={true} />
    <Section as="div">
      <FooterIcons />
      <FooterText />
    </Section>
  </Footer>
);
