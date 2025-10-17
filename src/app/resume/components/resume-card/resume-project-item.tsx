import { List } from "@/app/components/list";
import { Text } from "@/app/components/text";

interface Props {
  name: string;
  when: string;
  description: string;
  keypoints: string[];
}

export const ResumeProjectItem = ({
  name,
  when,
  description,
  keypoints,
}: Props) => (
  <li className="flex flex-col gap-5">
    <header className="inline-flex items-center justify-between w-full">
      <Text as="h4">{name}</Text>
      <Text as="p" className="paragraph">
        {when}
      </Text>
    </header>
    <Text className="md-paragraph lg:max-w-[70%]">{description}</Text>
    <List className="lg:max-w-[70%]" items={keypoints} />
  </li>
);
