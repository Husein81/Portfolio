import { motion } from "framer-motion";
import Icon from "../icon";

type Props = {
  service: Service;
  index: number;
};
const ServiceCard = ({ service, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + index * 0.1 }}
      className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div
          className={`min-w-fit p-3 rounded-xl bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon
            name={service.icon}
            className={`w-6 h-6 ${service.iconColor}`}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mountain-meadow transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-iron text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
