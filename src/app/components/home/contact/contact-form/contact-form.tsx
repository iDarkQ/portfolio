import {
  ContactFormButton,
  ContactFormField,
} from "@/app/components/home/contact";

export const ContactForm = () => (
  <form action="/search" className="w-full flex flex-col items-center gap-10">
    <div className="w-full grid max-sm:grid-cols-1 grid-cols-2 grid-rows-2 gap-4">
      <ContactFormField data-aos="fade-right" field="name" />
      <ContactFormField data-aos="fade-left" field="email" />
      <ContactFormField
        as="textarea"
        data-aos="fade-up"
        className="col-span-1 sm:col-span-2"
        field="message"
      />
    </div>
    <ContactFormButton />
  </form>
);
