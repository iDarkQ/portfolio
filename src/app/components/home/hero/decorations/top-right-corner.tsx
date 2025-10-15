import clsx from "clsx";

export const TopRightCorner = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx("absolute top-8 right-8", "max-sm:right-2 max-sm:top-2")}
  >
    <path
      d="M200 0 L0 0 L0 2 L198 2 L198 200 L200 200 Z"
      fill="var(--color-primary-80)"
    />
  </svg>
);
