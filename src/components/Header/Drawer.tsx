import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  content: JSX.Element[];
  onClose: () => void;
}
const Drawer = ({ content, onClose }: Props) => {
  return (
    <Box
      className="fixed inset-0 bg-black bg-opacity-50 w-screen flex items-center justify-start"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: ["-20rem", 0], opacity: 1 }}
        exit={{ x: [0, "-20rem"], opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white h-screen block sm:hidden w-60 p-1"
        onClick={(e) => e.stopPropagation()}
      >
        <Box>
          <Box my={1}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography
                variant="body1"
                p={2}
                color="#1a1a1a"
                sx={{ width: "100%" }}
              >
                Hussein{" "}
                <Box component={"span"} className="text-purple-500">
                  Nasrallah
                </Box>{" "}
              </Typography>
              <Box>
                <IconButton onClick={onClose}>
                  <Close />
                </IconButton>
              </Box>
            </Box>
            {content}
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};
export default Drawer;
