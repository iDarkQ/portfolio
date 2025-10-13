import { Card } from "@/app/components/card";
import { Chip } from "@/app/components/chip";
import { ProjectData } from "@/app/projects/page";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card as="a" className="!p-0 !gap-0" clickable href={project.link}>
      <Image
        aria-hidden
        src={project.image}
        alt={`${project.name} project`}
        width={1920}
        height={1080}
        className="z-2 w-full h-auto rounded-b-lg"
        sizes="100vw"
      />

      <div className="p-6 flex flex-col items-start justify-center gap-3">
        <h2>{project.name}</h2>
        <p className="pointer-events-none">{project.description}</p>
        <div className="flex flex-row flex-wrap gap-3 w-full">
          {project.tags.map((tag, index) => (
            <Chip key={index} text={tag} />
          ))}
        </div>
      </div>
    </Card>
  );
};
