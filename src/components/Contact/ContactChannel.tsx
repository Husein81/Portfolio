import { motion } from "framer-motion";

import { contactChannels, fadeUp } from "./config";
import Icon from "../icon";

const ContactChannel = () => {
  return (
    <motion.div
      variants={fadeUp}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20 backdrop-blur"
    >
      {contactChannels.map((channel) => (
        <div
          key={channel.label}
          className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-cyan-400/60 hover:bg-white/10"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <Icon name={channel.icon} className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wide text-gray-400">
              {channel.label}
            </p>
            {channel.href ? (
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex text-sm font-semibold text-white transition-colors duration-200 hover:text-cyan-300"
              >
                {channel.value}
              </a>
            ) : (
              <p className="mt-1 text-sm font-semibold text-white">
                {channel.value}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-400">{channel.description}</p>
          </div>
        </div>
      ))}

      <div className="rounded-2xl border border-cyan-400/40 bg-cyan-500/10 p-6 text-sm text-cyan-100">
        <p className="font-semibold uppercase tracking-wide text-cyan-200">
          Typical response time
        </p>
        <p className="mt-2 text-sm">
          Expect a thoughtful reply in under 24 hours. Urgent timelines? Mention
          it in your message and I’ll prioritize accordingly.
        </p>
      </div>
    </motion.div>
  );
};
export default ContactChannel;
