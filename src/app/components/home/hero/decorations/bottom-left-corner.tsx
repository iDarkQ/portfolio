import clsx from "clsx";

export const BottomLeftCorner = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(
      "absolute bottom-8 left-8",
      "max-sm:left-2 max-sm:bottom-2"
    )}
  >
    <path
      d="M0 200 L0 0 L2 0 L2 198 L200 198 L200 200 Z"
      fill="var(--color-primary-80)"
    />
  </svg>
);
