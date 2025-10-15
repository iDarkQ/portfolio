import { Button } from "@/app/components/button";

export const Contact = () => (
  <div
    id="contact"
    className="flex flex-col items-center justify-center gap-20 min-h-180 py-20"
  >
    <div className="w-[70%] flex flex-col gap-10">
      <h2 data-aos="fade-down" className="text-center">
        Send Me A Message!
      </h2>
      <p data-aos="flip-up" className="text-2xl text-center">
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>
      <form
        action="/search"
        className="w-full flex flex-col items-center gap-10"
      >
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-4">
          <div data-aos="fade-right" className="flex flex-col-reverse gap-1">
            <input name="name" placeholder="Enter your name" />
            <label htmlFor="name">Your name</label>
          </div>
          <div data-aos="fade-left" className="flex flex-col-reverse gap-1">
            <input name="email" placeholder="Enter your email" />
            <label htmlFor="email">Your email</label>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col-reverse col-span-2 gap-1"
          >
            <textarea name="message" placeholder="Enter your message" />
            <label htmlFor="message">Your message</label>
          </div>
        </div>
        <Button data-aos="fade-up" filled={false} itemType="submit">
          Send!
        </Button>
      </form>
    </div>
  </div>
);
