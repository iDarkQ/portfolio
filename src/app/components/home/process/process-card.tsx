import { ProcessCardDescription, ProcessCardTitle } from ".";

export const ProcessCard = () => (
  <div
    data-aos="fade-right"
    className="h-auto flex flex-col justify-start gap-5"
  >
    <ProcessCardTitle />
    <ProcessCardDescription />
  </div>
);
