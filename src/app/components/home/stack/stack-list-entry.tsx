import { StackCategory, StackItem, StackTechnology } from ".";

interface Props {
  category: string;
  items: StackItem[];
}

export const StackListEntry = ({ category, items }: Props) => (
  <div className="flex w-full gap-6 max-md:flex-col-reverse">
    <div className="z-1 flex flex-row flex-wrap gap-5 flex-3">
      {items.map((tech) => (
        <StackTechnology key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
    <StackCategory>{category}</StackCategory>
  </div>
);
