import { Header } from "@/app/components/layout/header/header";
import { HeaderHomeButton } from "@/app/components/layout/header/header-home-button";
import { HeaderCard } from "@/app/components/layout/header/header-card/header-card";

export const LayoutHeader = () => (
  <Header>
    <div className="w-full flex flex-row justify-between items-center">
      <HeaderHomeButton />
      <HeaderCard />
    </div>
  </Header>
);
