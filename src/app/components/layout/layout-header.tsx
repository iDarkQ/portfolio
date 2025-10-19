import {
  Header,
  HeaderHomeButton,
  HeaderCard,
} from "@/app/components/layout/header";

export const LayoutHeader = () => (
  <Header>
    <div className="w-full flex flex-row justify-between items-center">
      <HeaderHomeButton />
      <HeaderCard />
    </div>
  </Header>
);
