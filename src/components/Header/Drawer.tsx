import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  content: JSX.Element[];
  onClose: () => void;
}
const Drawer = ({ content, onClose }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: ["-20rem", 0], opacity: 1 }}
      exit={{ x: [0, "-20rem"], opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "50%",
        height: "100%",
        backgroundColor: "#fff",
        zIndex: 1300,
        boxShadow: "0 0 5px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
      }}
      className="backdrop-blur bg-opacity-50 bg-black"
    >
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
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
  );
};
export default Drawer;
