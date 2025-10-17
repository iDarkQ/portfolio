import { ResumeProjectItem } from "@/app/resume/components/resume-card/resume-project-item";

export const ResumeProjects = () => (
  <ul className="flex flex-col gap-5">
    <ResumeProjectItem
      name="Better Bedrock"
      when="Oct 2024 - Oct 2025"
      description="I developed the frontend and backend infrastructure, design and
        functionality for Better Bedrock's web app powered by React"
      keypoints={[
        "Pioneering initiatives around the future of onboarding, signup and developing technical vision for them",
        "Identified a gap in my team’s deployment workflow and built a solution that reduced the time required for each deployment from over 40 minutes to less than 6 minutes, which restores almost 300 hours of developer productivity every year",
        "Collaborating with UX designers and researchers to inform the direction of products we craft",
        "First-hand involvement in early-stage product and UX thinking and rapid prototyping",
      ]}
    />
    <ResumeProjectItem
      name="Daylytic"
      when="Dec 2024 - May 2025"
      description="Shaping the future of commerce and entrepreneurship – building and
        advocating for inclusive and thoughtful experiences for over three
        million merchants across the globe."
      keypoints={[
        "Pioneering initiatives around the future of onboarding, signup and developing technical vision for them",
        "Identified a gap in my team’s deployment workflow and built a solution that reduced the time required for each deployment from over 40 minutes to less than 6 minutes, which restores almost 300 hours of developer productivity every year",
        "Collaborating with UX designers and researchers to inform the direction of products we craft",
        "First-hand involvement in early-stage product and UX thinking and rapid prototyping",
      ]}
    />
    <ResumeProjectItem
      name="RedLight Events Manager"
      when="Jun 2025 - Jul 2025"
      description="Shaping the future of commerce and entrepreneurship – building and
        advocating for inclusive and thoughtful experiences for over three
        million merchants across the globe."
      keypoints={[
        "Pioneering initiatives around the future of onboarding, signup and developing technical vision for them",
        "Identified a gap in my team’s deployment workflow and built a solution that reduced the time required for each deployment from over 40 minutes to less than 6 minutes, which restores almost 300 hours of developer productivity every year",
        "Collaborating with UX designers and researchers to inform the direction of products we craft",
        "First-hand involvement in early-stage product and UX thinking and rapid prototyping",
      ]}
    />
  </ul>
);
