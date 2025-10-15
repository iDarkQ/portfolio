import clsx from "clsx";

interface Props {
  link: string;
  name: string;
}

export const HeaderAnchor = ({ link, name }: Props) => (
  <a
    data-aos="fade-left"
    data-aos-duration="200"
    href={link}
    className={clsx(
      "text-black!",
      "max-lg:p-5" //max-lg
    )}
  >
    {name}
  </a>
);
