import { ProjectCard } from "@/app/components/project-card";
import { projects } from "@/app/projects/data/project-data";

export const ProjectsList = () => (
  <div className="grid grid-cols-2 w-full gap-5 h-auto max-md:grid-cols-1">
    {projects.map((data) => (
      <ProjectCard key={data.name} project={data} />
    ))}
  </div>
);
