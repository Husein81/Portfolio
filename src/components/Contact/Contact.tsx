import { motion } from "framer-motion";

import GradientSphere from "../GradientSphere";
import ContactChannel from "./ContactChannel";
import { fadeUp, stagger } from "./config";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="relative overflow-hidden bg-asphalt py-24 sm:py-28"
    >
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-200 shadow-sm shadow-black/20 backdrop-blur">
            Contact
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Let’s build something remarkable together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base">
            Share a few details about your project, collaboration idea, or team
            needs. I typically respond within one business day.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr]"
        >
          <ContactChannel />

          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
