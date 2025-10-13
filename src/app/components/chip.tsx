interface ChipProps {
  text: string;
}

export const Chip = ({ text }: ChipProps) => (
  <div className="h-[var(--chip-container-height)] bg-secondary-container text-white text-sm w-fit items-center justify-center flex rounded-xsm p-2">{text}</div>
);
