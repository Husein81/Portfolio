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
    <div className="modern-hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Tech Stack Visualization - Hidden on mobile for performance */}
      <motion.div
        className="absolute w-full h-full tech-constellation"
        style={{
          rotate: constellationRotate,
          scale: iconScale,
          opacity: iconOpacity,
        }}
      >
        <TechConstellation />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-5 grid-pattern"></div>

      <div
        id="Home"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 py-8 sm:py-10 lg:py-16">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: "15rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center lg:justify-between">
                <div className="order-2 lg:order-1 w-full lg:max-w-2xl">
                  <div className="backdrop-blur-sm opacity-75 md:opacity-95 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <motion.div
                      className="flex flex-row items-center justify-between gap-4 sm:gap-6 mb-6"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-mountain-meadow via-secondary to-accent bg-clip-text text-transparent leading-tight">
                        Hussein Nasrallah
                      </h1>

                      {/* Mobile profile image - shown inline with name on mobile */}
                      <div className="sm:hidden w-24 h-24 rounded-full overflow-hidden border-2 border-mountain-meadow shadow-lg shadow-mountain-meadow/20 flex-shrink-0">
                        <img
                          src="/assets/others/profile.png"
                          alt="Hussein Nasrallah"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Floating accent elements - responsive sizing */}
                      <div className="sm:hidden">
                        <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-secondary rounded-full animate-pulse"></div>
                      </div>
                    </motion.div>

                    <motion.p
                      className="text-lg sm:text-xl md:text-2xl text-iron mb-6 sm:mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Full Stack Developer specializing in modern web
                      technologies and scalable solutions
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Link
                        to="Contact"
                        smooth={true}
                        duration={500}
                        className="bg-gradient-to-r from-mountain-meadow to-secondary px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-mountain-meadow/25 transition-all duration-300 cursor-pointer text-center"
                      >
                        Get In Touch
                      </Link>

                      <Link
                        to="Projects"
                        smooth={true}
                        duration={500}
                        className="border border-mountain-meadow/30 px-6 py-3 rounded-xl text-mountain-meadow font-semibold hover:bg-mountain-meadow/10 transition-all duration-300 cursor-pointer text-center"
                      >
                        View Projects
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Desktop Profile Image */}
                <div className="order-1 lg:order-2 hidden sm:block">
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-mountain-meadow to-secondary shadow-2xl shadow-mountain-meadow/20">
                      <img
                        src="/assets/others/profile.png"
                        alt="Hussein Nasrallah"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating accent elements - responsive sizing */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full animate-bounce"></div>
                    <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-secondary rounded-full animate-pulse"></div>
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
