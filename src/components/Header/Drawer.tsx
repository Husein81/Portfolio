import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";

interface Props {
  content: JSX.Element[];
  onClose: () => void;
}
const Drawer = ({ content, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 w-screen flex items-center justify-start"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: ["-20rem", 0], opacity: 1 }}
        exit={{ x: [0, "-20rem"], opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-shark h-screen block  sm:hidden w-60 p-1"
        onClick={(e: React.FormEvent) => e.stopPropagation()}
      >
        <div>
          <div className="my-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between p-2 text-iron w-full">
                <span className="text-iron ">
                  Hussein
                  <span className="text-mountainMeadow"> Nasrallah</span>
                </span>
              </div>
              <button className="text-iron" onClick={onClose}>
                <Close />
              </button>
            </div>
            {content}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Drawer;
