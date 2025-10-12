import { Button } from "@/app/components/button";

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <header className="z-999 fixed w-full h-auto bg-transparent p-xxl flex flex-row justify-between items-center">
        <Button>
          <span className="material-symbols-outlined">home</span>
        </Button>
        <Button>
          <span className="material-symbols-outlined">menu</span>
        </Button>
      </header>
      {children}
    </div>
  );
}
