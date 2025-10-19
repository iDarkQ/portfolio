import { Divider } from "@/app/components/divider";
import {
  Footer,
  FooterIcons,
  FooterText,
} from "@/app/components/layout/footer";
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
