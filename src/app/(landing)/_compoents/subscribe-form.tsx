import { useReCaptcha } from "next-recaptcha-v3";
import { useState, useTransition } from "react";
import { subscribeAction } from "../actions";
import { sendEvent } from "@/lib/analytics";

export function SubscribeForm() {
  const [isPending, startTransition] = useTransition();
  const { executeRecaptcha } = useReCaptcha();
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <form
        className="flex gap-2 mt-8"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSuccess(false);
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          const token = await executeRecaptcha("form_submit");
          const email = formData.get("email");
          startTransition(() => {
            subscribeAction({
              email: email as string,
              token,
            }).then(() => {
              setIsSuccess(true);
              sendEvent("user subscribed");
              form.reset();
            });
          });
        }}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="text-black p-2 rounded w-[320px] placeholder:text-gray-400"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="disabled:bg-gray-500 bg-cyan-400 rounded p-2 text-black h-fit self-end"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {isSuccess && (
        <p className="text-green-500">Thank you for subscribing!</p>
      )}
    </>
  );
}
