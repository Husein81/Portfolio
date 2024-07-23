import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface AgeProps {
  birthYear: number;
  currentYear: number;
}

const About = () => {
  const [animateOnLoad, setAnimateOnLoad] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 160 && !animationTriggered) {
        setAnimateOnLoad(true);
        setAnimationTriggered(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animateOnLoad, animationTriggered]);
  
  const position = scrollPosition > 160 && animateOnLoad;

  const calculateAge = ({ birthYear, currentYear }: AgeProps) => {
    return currentYear - birthYear;
  };

  const age: number = calculateAge({ birthYear: 2002, currentYear: new Date().getFullYear() });

  return (
    <Container maxWidth="md" sx={{ pt: 10 }} id="About">
      <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
        About Me
      </Typography>
      <Box className="flex sm:flex-row flex-col" gap={5}>
        <Box width={'100%'} className={`${position  ? 'move-left' : ''} sm:grid`}>
          <Typography variant="body1" paragraph color={"#8e8e8e"}>
            Hello, I'm Hussein Nasrallah, a {age}-year-old Lebanese Full Stack Developer passionate about creating innovative digital solutions.
            I began programming at 18 and have developed skills to create dynamic, user-friendly web applications.
          </Typography>
          <Typography variant="body1" paragraph color={"#8e8e8e"}>
            I've worked on various projects, including e-commerce platforms and social networking apps,
            excelling in both front-end and back-end development.
            My commitment to technology is driven by its potential to empower and transform lives.
            As a lifelong learner, I stay updated with industry trends and technologies, enabling me to deliver cutting-edge solutions.
            I'm eager to continue contributing to the digital landscape as a Full Stack Developer.
          </Typography>
        </Box>
        <Box className={`${position ? 'move-right' : ''}`}>
          <img className="rounded" src="/assets/others/photo_2024-06-19_09-14-46.jpg" alt=""/>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
