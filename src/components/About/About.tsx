import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Icon from "../icon";
import { expertise, services, stats } from "./config";
import ServiceCard from "./service-card";

type AgeProps = {
  birthYear: number;
  currentYear: number;
};

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

  return (
    <section className="relative min-h-screen py-20 overflow-hidden" id="About">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-shark to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {position && (
          <AnimatePresence>
            <motion.div
              key="about-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-mountain-meadow/20 to-secondary/20 border border-mountain-meadow/30 rounded-full text-mountain-meadow text-sm font-medium">
                    Get to know me
                  </span>
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-mountain-meadow to-accent bg-clip-text text-transparent">
                    About Me
                  </span>
                </h1>
                <p className="text-iron text-base md:text-lg max-w-2xl mx-auto">
                  Full Stack Developer passionate about creating exceptional
                  digital experiences
                </p>
                <div className="w-32 mt-4 h-1 bg-gradient-to-r from-mountain-meadow to-accent mx-auto rounded-full" />
              </motion.div>

              {/* Main Content Grid */}
              <div className="max-w-7xl mx-auto space-y-16">
                {/* Profile & Stats Section */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Profile Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="lg:col-span-1"
                  >
                    <div className="sticky top-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-mountain-meadow to-secondary rounded-full blur-2xl opacity-50"></div>
                        <img
                          className="relative w-32 h-32 object-cover rounded-full border-4 border-white/20"
                          src="/assets/others/profile.png"
                          alt="Hussein Nasrallah"
                        />
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-primary rounded-full"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Hussein Nasrallah
                      </h3>
                      <p className="text-mountain-meadow font-medium mb-6">
                        Full Stack Developer
                      </p>

                      <div className="space-y-3 mb-6">
                        {expertise.map((item, index) => (
                          <motion.div
                            key={`expertise-${item.label}-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-center gap-3 bg-white/5 rounded-lg p-3"
                          >
                            <Icon
                              name={item.icon}
                              className="w-5 h-5 text-mountain-meadow"
                            />
                            <div className="text-left flex-1">
                              <p className="text-xs text-iron">{item.label}</p>
                              <p className="text-sm text-white font-medium">
                                {item.value}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <a
                        href="#Contact"
                        className="block w-full py-3 px-6 bg-gradient-to-r from-mountain-meadow to-secondary hover:from-mountain-meadow/90 hover:to-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Let's Talk
                      </a>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:col-span-2 space-y-6"
                  >
                    {/* Bio Card */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                      <h2 className="text-2xl font-bold text-white mb-4">
                        Hello! I'm{" "}
                        <span className="text-transparent bg-gradient-to-r from-mountain-meadow to-secondary bg-clip-text">
                          Hussein
                        </span>
                      </h2>
                      <div className="space-y-4 text-iron leading-relaxed">
                        <p>
                          A {age}-year-old Lebanese Full Stack Software
                          Developer with a passion for building innovative
                          digital solutions that make a difference. I discovered
                          my love for programming at 18 and haven't looked back
                          since.
                        </p>
                        <p>
                          My journey in tech has equipped me with expertise in
                          creating dynamic, user-friendly web and mobile
                          applications. From e-commerce platforms to social
                          networking apps, inventory management systems to
                          cross-platform mobile solutions—I've worked across
                          diverse domains using cutting-edge technologies like
                          React, Next.js, and React Native.
                        </p>
                        <p>
                          I believe in writing clean, maintainable code and
                          creating experiences that users love. Every project is
                          an opportunity to learn something new and push the
                          boundaries of what's possible.
                        </p>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={`stat-${stat.label}-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div
                            className={`text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs md:text-sm text-iron">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* What I Do Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                      What I Do
                    </h2>
                    <p className="text-iron">
                      Specialized services to bring your ideas to life
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <ServiceCard
                        key={`service-${service.title}-${index}`}
                        service={service}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default About;
