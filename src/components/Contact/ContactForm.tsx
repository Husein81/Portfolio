import emailjs from "@emailjs/browser";
import { ArrowRight, Check, LoaderCircle, TriangleAlert } from "lucide-react";
import { useRef, useState } from "react";

import { site } from "../../data/site";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;
    if (!form) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setStatus("error");
      setMessage(`The form isn't configured right now — email ${site.email}.`);
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID);
      setStatus("success");
      setMessage("Message sent. I'll get back to you within a day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `That didn't go through. Email ${site.email} directly and it will reach me.`
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className="mt-2.5"
          />
        </div>

        <div>
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className="mt-2.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message">What are you building?</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={7}
          required
          placeholder="A sentence on the project, the stage it's at, and what you need."
          className="mt-2.5"
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Button type="submit" disabled={isSending} className="group">
          {isSending ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : null}
          {isSending ? "Sending" : "Send message"}
          {isSending ? null : (
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          )}
        </Button>

        <p
          role="status"
          aria-live="polite"
          className={`flex items-center gap-2 text-sm ${
            status === "error" ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {status === "success" ? (
            <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : null}
          {status === "error" ? (
            <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden="true" />
          ) : null}
          {message}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
