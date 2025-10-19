import { ResumeCardContact, ResumeCardCoreTechnologies, ResumeCardDescription, ResumeCardHeader, ResumeCardLanguages, ResumeCardOthers } from ".";

import { Card } from "@/app/components/card";
import { Divider } from "@/app/components/divider";
import { darkResume } from "@/app/components/text";
import clsx from "clsx";

export const ResumeCard = () => (
  <Card
    className={clsx("flex flex-row max-lg:flex-col", !darkResume && "bg-white")}
  >
    <div className="gap-10 flex flex-col pb-10">
      <ResumeCardContact />
      <ResumeCardCoreTechnologies />
      <ResumeCardOthers />
      <ResumeCardLanguages />
    </div>
    <article className="gap-10 flex flex-col">
      <ResumeCardHeader />
      <Divider infinite />
      <ResumeCardDescription />
    </article>
  </Card>
);
