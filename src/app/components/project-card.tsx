import { Card } from "@/app/components/card";
import { Chip } from "@/app/components/chip";
import { Text } from "@/app/components/text";
import { ProjectData } from "@/app/projects/data/project-data";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <Card as="a" className="!p-0 !gap-0" clickable href={project.link}>
    <Image
      aria-hidden
      src={project.image}
      alt={`${project.name} project`}
      width={1920}
      height={1080}
      className="z-2 w-full h-auto rounded-b-lg object-cover aspect-video"
      sizes="100vw"
    />

    <div className="p-6 flex flex-col items-start justify-center gap-3">
      <Text as="h2">{project.name}</Text>
      <Text className="pointer-events-none">{project.description}</Text>
      <div className="flex flex-row flex-wrap gap-3 w-full">
        {project.tags.map((tag, index) => (
          <Chip key={index}>{tag}</Chip>
        ))}
      </div>
    </div>
  </Card>
);
