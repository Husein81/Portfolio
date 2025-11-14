import { motion } from "framer-motion";
import Icon from "../icon";

type Props = {
  content: JSX.Element[];
  onClose: () => void;
};

const Drawer = ({ content, onClose }: Props) => {
  return (
    <>
      {/* Backdrop with blur effect */}
      <motion.div
        className="absolute inset-0 h-screen bg-black/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      {/* Drawer Container */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.4,
        }}
        className="absolute left-0 top-0 h-screen w-80 z-50 sm:hidden"
        onClick={(e: React.FormEvent) => e.stopPropagation()}
      >
        {/* Glassmorphism background */}
        <div className="h-full bg-primary border-r border-white/20 shadow-2xl">
          {/* Header Section */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <img
                  src="/assets/others/profile.png"
                  alt="H"
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="text-white font-semibold">
                  Hussein{" "}
                  <span className="bg-gradient-to-r from-mountain-meadow to-secondary bg-clip-text text-transparent">
                    Nasrallah
                  </span>
                </span>
                <p className="text-iron text-sm">Software Developer</p>
              </div>
            </motion.div>

            <motion.button
              className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group"
              onClick={onClose}
              title="Close menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon
                name="X"
                className="text-iron group-hover:text-white transition-colors duration-200"
              />
            </motion.button>
          </div>

          {/* Navigation Menu */}
          <motion.div
            className="p-4 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <nav>
              <ul className="space-y-1">
                {content.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    whileHover={{ x: 8 }}
                    className="relative"
                  >
                    {item}
                  </motion.div>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Footer Section */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/Husein81"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  name="Github"
                  className="text-iron hover:text-white transition-colors duration-200"
                />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/hussein-nasrallah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  name="Linkedin"
                  className="text-iron hover:text-white transition-colors duration-200"
                />
              </motion.a>
              <motion.a
                href={`mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`}
                className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  name="Mail"
                  className="text-iron hover:text-white transition-colors duration-200"
                />
              </motion.a>
            </div>
            <p className="text-iron text-xs mt-3 opacity-70">
              © 2024 Hussein Nasrallah
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
