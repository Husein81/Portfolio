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
    <Container sx={{ pt: 10 }} id="About">
      <Typography variant="h4" color={"gray"} component="h1" gutterBottom>
        About Me
      </Typography>
      <Box className="flex sm:flex-row flex-col" gap={5}>
        <Box width={'100%'} className={`${position  ? 'move-left' : ''} sm:grid`}>
          <Typography variant="body1" paragraph color={"#8e8e8e"}>
            Hello, I'm Hussein Nasrallah, a {age}-year-old Lebanese Software Developer. 
            I started programming at 18 and specialize in creating dynamic, 
            user-friendly web and mobile applications. 
            With experience in e-commerce platforms, social networking apps, and mobile apps, 
            I excel in both front-end and back-end development. 
            Passionate about technology's transformative power, I stay updated with industry trends to deliver innovative solutions. 
            I'm dedicated to advancing the digital landscape as a Software Developer.
          </Typography>
        </Box>
        <Box className={`${position ? 'move-right' : ''}`}>
          <Box component={'img'} borderRadius={2} src="/assets/others/photo_2024-06-19_09-14-46.jpg" alt=""/>
        </Box>
      </Box>
    </Container>
  );
}

export default About;
