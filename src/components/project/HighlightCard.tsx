import { motion } from "framer-motion";
import Icon from "../icon";
import { fadeUp } from "./config";

type Props = {
  card: {
    title: string;
    description: string;
    icon: string;
  };
};

const HighlightCard = ({ card }: Props) => {
  return (
    <motion.div
      key={card.title}
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm shadow-black/20 backdrop-blur transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-400/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start gap-4">
        <span className="flex size-12 p-3  items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
          <Icon name={card.icon} className="size-6" />
        </span>
        <div>
          <h3 className="text-base font-semibold text-white">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-300">{card.description}</p>
        </div>
      </div>
    </motion.div>
  );
};
export default HighlightCard;
