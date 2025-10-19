import { Text } from "@/app/components/text";

interface Props {
  children: string;
}

export const StackCategory = ({ children }: Props) => (
  <div data-aos="flip-up" className="flex-1 h-fit">
    <Text as="h3" className="capitalize">
      {children}
    </Text>
  </div>
);
