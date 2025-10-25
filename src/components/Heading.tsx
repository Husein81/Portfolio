import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  preTitle: string;
  isHero?: boolean;
};

const Heading = ({ preTitle, title, description, isHero = false }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: isHero ? -16 : 0 }}
      whileInView={{ opacity: 1, y: isHero ? 0 : -16 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center justify-center gap-6"
    >
      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wide text-gray-200 shadow-sm shadow-black/20 backdrop-blur">
        {preTitle}
      </span>

      <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h1>

      <p className="max-w-2xl text-sm text-gray-300 sm:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export default Heading;
