import { Section } from "@/app/components/section";
import { ContactDescription, ContactForm, ContactHeading } from ".";

export const Contact = () => (
  <Section id="contact" extraClassName="gap-5">
    <ContactHeading />
    <ContactDescription />
    <ContactForm />
  </Section>
);
