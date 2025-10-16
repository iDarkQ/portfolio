import { Text } from "@/app/components/text";

interface Props {
    children: string;
}

export const HeroHighlightMessage = ({children}: Props) => (
  <Text className="max-sm:text-xs text-sm text-primary-80!">
    {children}
  </Text>
);
