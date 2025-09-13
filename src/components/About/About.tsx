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

  const highlights = [
    { label: "Years of Experience", value: "5+", icon: "💻" },
    { label: "Projects Completed", value: "20+", icon: "🚀" },
    { label: "Technologies Mastered", value: "15+", icon: "⚡" },
    { label: "Happy Clients", value: "10+", icon: "😊" },
  ];

  const skills = [
    "Full Stack Development",
    "React & Next.js",
    "Mobile Development",
    "UI/UX Design",
    "Database Design",
    "API Development",
  ];

  return (
    <section className="relative container mx-auto p-6 mt-20" id="About">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-shark/20 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-mountain-meadow via-secondary to-accent bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-iron text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-mountain-meadow to-accent mx-auto mt-4 rounded-full"></div>
        </div>
        {/* Main Content */}
        {position && (
          <AnimatePresence mode="wait">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Column - Content */}
              <motion.div
                key="content"
                initial={{ x: "-3rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Introduction */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Hello, I'm{" "}
                    <span className="bg-gradient-to-r from-mountain-meadow to-secondary bg-clip-text text-transparent">
                      Hussein Nasrallah
                    </span>
                  </h2>
                  <p className="text-iron leading-relaxed">
                    A {age}-year-old Lebanese Full Stack Software Developer
                    passionate about creating innovative digital solutions. I
                    started programming at 18 and have expertise in building
                    dynamic, user-friendly web and mobile applications.
                  </p>
                  <p className="text-iron leading-relaxed">
                    My experience spans e-commerce platforms, social networking
                    apps, inventory management systems, and cross-platform
                    mobile applications using modern technologies like React,
                    Next.js, and React Native.
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Expertise Areas
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-mountain-meadow/10 border border-mountain-meadow/20"
                      >
                        <div className="w-2 h-2 bg-mountain-meadow rounded-full"></div>
                        <span className="text-sm text-white">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Visual & Stats */}
              <motion.div
                key="visual"
                initial={{ x: "3rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="space-y-8"
              >
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-mountain-meadow to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                    <div className="size-32 mx-auto mb-4 relative">
                      <img
                        className="size-full object-cover rounded-full border-4 border-mountain-meadow/30"
                        src="/assets/others/profile.png"
                        alt="Hussein Nasrallah"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-mountain-meadow/20 to-secondary/20"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      Hussein Nasrallah
                    </h3>
                    <p className="text-mountain-meadow">Full Stack Developer</p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center group hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2">{highlight.icon}</div>
                      <div className="text-2xl font-bold text-mountain-meadow mb-1">
                        {highlight.value}
                      </div>
                      <div className="text-xs text-iron">{highlight.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default About;
