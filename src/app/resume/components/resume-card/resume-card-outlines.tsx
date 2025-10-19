import { List } from "@/app/components/list";
import { Text } from "@/app/components/text";

interface Props {
  name: string;
  items: string[];
}

export const ResumeCardOutlines = ({ name, items }: Props) => (
  <section className="flex flex-col gap-5">
    <Text as="h3">{name}</Text>
    <List className="max-lg:[&>*]:inline-flex!" items={items} />
  </section>
);
