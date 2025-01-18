import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AgeProps {
  birthYear: number;
  currentYear: number;
}

const About = () => {
  const scrollPositionRef = useRef<number>(0);
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
    <div className={"container mx-auto p-4 mt-12"} id="About">
      <h1 className="text-4xl text-iron mb-4">About Me</h1>
      <div className="flex sm:flex-row flex-col gap-4">
        {position && (
          <AnimatePresence mode="wait">
            <motion.div
              key="left"
              initial={{ x: "-3rem" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <p className="text-iron text-lg">{text}</p>
            </motion.div>
            <motion.div
              key="right"
              initial={{ x: "3rem" }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <img
                className="rounded-lg"
                src="/assets/others/photo_2024-06-19_09-14-46.jpg"
                alt={"HN"}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default About;
