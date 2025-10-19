import { Divider } from "@/app/components/divider";
import { Text } from "@/app/components/text";

export const StackHeading = () => (
  <div data-aos="fade-right" className="flex flex-col w-full gap-y-5">
    <Text as="h2">My Stack</Text>
    <Divider />
  </div>
);
