import { Box, Container, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AgeProps {
  birthYear: number;
  currentYear: number;
}

const About = () => {
  const scrollPositionRef = useRef(0);
  const [animateOnLoad, setAnimateOnLoad] = useState(false);
  const animationTriggeredRef = useRef(false);

  const handleScroll = () => {
    scrollPositionRef.current = window.scrollY;
    if (scrollPositionRef.current > 160 && !animationTriggeredRef.current) {
      setAnimateOnLoad(true);
      animationTriggeredRef.current = true;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const position = scrollPositionRef.current > 160 && animateOnLoad;

  const calculateAge = ({ birthYear, currentYear }: AgeProps) => {
    return currentYear - birthYear;
  };

  const age: number = calculateAge({
    birthYear: 2002,
    currentYear: new Date().getFullYear(),
  });

  const text = ` Hello, I'm Hussein Nasrallah, a ${age}-year-old Lebanese Software
            Developer. I started programming at 18 and specialize in creating
            dynamic, user-friendly web and mobile applications. With experience
            in e-commerce platforms, social networking apps, and mobile apps, I
            excel in both front-end and back-end development. Passionate about
            technology's transformation power, I stay updated with industry
            trends to deliver innovative solutions. I'm dedicated to advancing
            the digital landscape as a Software Developer.`;
  return (
    <Container sx={{ pt: 10 }} id="About">
      <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
        About Me
      </Typography>
      <Box className="flex sm:flex-row flex-col" gap={5}>
        {position && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ x: "-7rem" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <Typography variant="body1" paragraph color={"#8e8e8e"}>
                {text}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ x: "7rem" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <Box
                component={"img"}
                borderRadius={2}
                src="/assets/others/photo_2024-06-19_09-14-46.jpg"
                alt=""
              />
            </motion.div>
          </AnimatePresence>
        )}
      </Box>
    </Container>
  );
};

export default About;
