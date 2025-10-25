import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "../icon";
import { fadeUp } from "./config";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const USER_ID = import.meta.env.VITE_USER_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    setLoading(true);
    setStatus("idle");
    setFeedback("");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      () => {
        setLoading(false);
        setStatus("success");
        setFeedback("Thanks for reaching out! I will reply within 24 hours.");
        form.current?.reset();
      },
      () => {
        setLoading(false);
        setStatus("error");
        setFeedback(
          "Something went wrong. Please try again or connect with me on LinkedIn."
        );
      }
    );
  };

  return (
    <motion.form
      ref={form}
      variants={fadeUp}
      onSubmit={sendEmail}
      className="space-y-6 rounded-3xl border border-white/10 bg-primary/45 p-8 shadow-xl shadow-black/25 backdrop-blur"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-200">
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder="How should I address you?"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 transition-colors duration-200 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-200">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 transition-colors duration-200 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          />
        </label>
      </div>

      <label className="flex lg:h-2/3 flex-col gap-2 text-sm font-medium text-gray-200">
        Project details
        <textarea
          name="message"
          rows={6}
          required
          placeholder="Share the context, goals, timeline, or anything else I should know."
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 transition-colors duration-200 focus:border-cyan-400/70 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Icon
            name="Send"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          />
          {loading ? "Sending..." : "Send message"}
        </button>

        {status !== "idle" && (
          <div
            className={`inline-flex items-center gap-2 text-sm ${
              status === "success" ? "text-cyan-200" : "text-rose-200"
            }`}
            role="status"
            aria-live="polite"
          >
            {status === "success" ? (
              <Icon name="CheckCircle2" className="h-5 w-5" />
            ) : (
              <Icon name="AlertCircle" className="h-5 w-5" />
            )}
            {feedback}
          </div>
        )}
      </div>
    </motion.form>
  );
};
export default ContactForm;
