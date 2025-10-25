import { motion } from "framer-motion";

import GradientSphere from "../GradientSphere";
import Heading from "../Heading";
import { stagger } from "./config";
import ContactChannel from "./ContactChannel";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="relative overflow-hidden bg-asphalt py-24 sm:py-28"
    >
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <Heading
          preTitle="Contact"
          title="Let’s build something remarkable together"
          description="Share a few details about your project, collaboration idea, or team needs. I typically respond within one business day."
        />

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
