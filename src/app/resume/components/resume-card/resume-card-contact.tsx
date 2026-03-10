import { Text } from "@/app/components/text";
import { ResumeCardLink } from ".";

export const ResumeCardContact = () => (
  <section className="flex flex-col gap-1">
    <ResumeCardLink link="https://idarkq.dev/">
      https://idarkq.dev
    </ResumeCardLink>
    <ResumeCardLink link="mailto:idarkq.dev@gmail.com">
      idarkq.dev@gmail.com
    </ResumeCardLink>
    <ResumeCardLink link="https://github.com/iDarkQ">
      https://github.com/idarkq
    </ResumeCardLink>
    <ResumeCardLink link="tel:+351927402792">+351 927 402 792</ResumeCardLink>
    <ResumeCardLink link="https://www.linkedin.com/in/idarkq/">
      linkedin.com/in/idarkq
    </ResumeCardLink>
    <Text>Coimbra, Portugal</Text>
  </section>
);
