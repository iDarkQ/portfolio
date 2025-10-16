import { ProcessCardTitle } from "@/app/components/home/process/prcoess-card-title";
import { ProcessCardDescription } from "@/app/components/home/process/process-card-description";

export const ProcessCard = () => (
  <div
    data-aos="fade-right"
    className="h-auto flex flex-col justify-start gap-5"
  >
    <ProcessCardTitle />
    <ProcessCardDescription />
  </div>
);
