import { Text } from "@/app/components/text";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  field?: string;
  as?: "input" | "textarea";
  error?: FieldError | undefined;
}

export const ContactFormField = ({
  as = "input",
  className,
  field,
  error,
  ...rest
}: Props) => {
  const Component = as;

  return (
    <div {...rest} className={clsx("flex flex-col-reverse gap-1", className)}>
      {error && <Text className="text-red-400">{error.message}</Text>}
      <Component
        id={field}
        name={field}
        placeholder={`Enter your ${field}`}
        className={clsx(
          "peer paragraph outline-none w-full p-3 my-[10px] box-border border-0 text-white",
          "border-b border-primary-80",
          "focus:border-primary",
          as === "textarea" && "resize-y min-h-[100px] max-h-[300px]"
        )}
      />
      <label
        htmlFor={field}
        className={clsx("paragraph text-primary-80", "peer-focus:text-primary")}
      >
        Your {field} *
      </label>
    </div>
  );
};
