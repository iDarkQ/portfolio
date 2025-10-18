import { Chip } from "@/app/components/chip";
import { Text } from "@/app/components/text";
import { ReactNode } from "react";

interface Props {
  name: string;
  icon: string | ReactNode;
}

export const StackTechnology = ({ name, icon }: Props) => (
  <Chip data-aos="flip-up" className="h-auto gap-2">
    <Text className="lg-paragraph">{name}</Text>
    {icon}
  </Chip>
);
