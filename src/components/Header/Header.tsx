import { Link } from "react-scroll";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import TechConstellation from "./TechConstellation";

const Header = () => {
  const { scrollYProgress } = useScroll();

  // Transform values for scroll-based animations
  const constellationRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const iconScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const iconOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="modern-hero-bg h-screen flex items-center relative overflow-hidden">
      {/* Animated Tech Stack Visualization */}
      <motion.div
        className="absolute inset-0 tech-constellation"
        style={{
          rotate: constellationRotate,
          scale: iconScale,
          opacity: iconOpacity,
        }}
      >
        <TechConstellation />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 grid-pattern"></div>

      <div id="Home" className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 py-10 ">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: "15rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="grid lg:flex gap-12 items-center lg:justify-evenly">
                <div className="order-2 lg:order-1 lg:max-w-2xl">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <motion.h1
                      className="text-4xl flex gap-2 items-center md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-mountain-meadow via-secondary to-accent bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      Hussein Nasrallah
                      <div className="md:hidden w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-mountain-meadow to-secondary shadow-2xl shadow-mountain-meadow/20">
                        <img
                          src="/public/assets/others/profile.png"
                          alt="Hussein Nasrallah"
                          className="rounded-full size-full object-cover"
                        />
                      </div>
                    </motion.h1>

                    <motion.p
                      className="text-xl md:text-2xl text-iron mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Full Stack Developer specializing in modern web
                      technologies and scalable solutions
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Link
                        to="Contact"
                        smooth={true}
                        duration={500}
                        className="bg-gradient-to-r from-mountain-meadow to-secondary px-8 py-4 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-mountain-meadow/25 transition-all duration-300 cursor-pointer text-center"
                      >
                        Get In Touch
                      </Link>

                      <Link
                        to="Projects"
                        smooth={true}
                        duration={500}
                        className="border border-mountain-meadow/30 px-8 py-4 rounded-xl text-mountain-meadow font-semibold hover:bg-mountain-meadow/10 transition-all duration-300 cursor-pointer text-center"
                      >
                        View Projects
                      </Link>
                    </motion.div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 ">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="hidden md:flex size-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-mountain-meadow to-secondary shadow-2xl shadow-mountain-meadow/20">
                      <img
                        src="/public/assets/others/profile.png"
                        alt="Hussein Nasrallah"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating accent elements */}
                    <div className="absolute hidden md:-top-4 md:-right-4 w-8 h-8 bg-accent rounded-full animate-bounce"></div>
                    <div className="absolute hidden md:-bottom-4 md:-left-4 w-6 h-6 bg-secondary rounded-full animate-pulse"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
