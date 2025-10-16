import { Section } from "@/app/components/section";
import { ContactDescription, ContactForm, ContactHeading } from ".";

export const Contact = () => (
  <Section extraClassName="gap-5">
    <ContactHeading />
    <ContactDescription />
    <ContactForm />
  </Section>
);
