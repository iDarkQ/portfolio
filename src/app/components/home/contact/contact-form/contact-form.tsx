"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ContactFormButton, ContactFormField } from ".";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Text } from "@/app/components/text";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(1, "Message is required"),
});

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setIsSubmitted(true);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center gap-10"
    >
      <div className="w-full grid max-sm:grid-cols-1 grid-cols-2 grid-rows-2 gap-4">
        <ContactFormField
          data-aos="fade-right"
          field="name"
          error={errors.name}
          {...register("name")}
        />
        <ContactFormField
          data-aos="fade-left"
          field="email"
          error={errors.email}
          {...register("email")}
        />
        <ContactFormField
          as="textarea"
          data-aos="fade-up"
          className="col-span-1 sm:col-span-2"
          field="message"
          error={errors.message}
          {...register("message")}
        />
      </div>

      {isSubmitted && (
        <div data-aos="fade-up">
          <Text className="text-green-300!">
            ✅ Your message has been sent successfully!
          </Text>
        </div>
      )}

      <ContactFormButton />
    </form>
  );
};
