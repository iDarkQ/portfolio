import { StackListEntry, StackData } from ".";

export const StackList = () => (
  <div className="flex flex-col w-full gap-y-10">
    {Object.entries(StackData).map(([category, items]) => (
      <StackListEntry key={category} category={category} items={items} />
    ))}
  </div>
);
