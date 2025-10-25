import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { SKILLS } from "../skills/config";
import GradientSphere from "../GradientSphere";
import Heading from "../Heading";

type HeroStat = {
  label: string;
  value: string;
  description: string;
  gradient: string;
};

const heroStats: HeroStat[] = [
  {
    label: "Years of experience",
    value: "4+",
    description: "Building production-ready products",
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
  },
  {
    label: "Projects shipped",
    value: "25+",
    description: "Web, mobile, and backend solutions",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    label: "Avg. response time",
    value: "<24h",
    description: "For new collaborations",
    gradient: "from-amber-400 via-orange-500 to-pink-500",
  },
];

const featuredSkills = SKILLS.slice(0, 8);

const Header = () => {
  return (
    <section
      id="Home"
      className="relative overflow-hidden bg-primary py-24 sm:py-28"
    >
      {/* Background gradients */}
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <Heading
            preTitle="Software Engineer"
            title="Crafting reliable, fast, and delightful digital products."
            description="I partner with startups and teams to design, build, and ship modern web experiences with clean architecture, scalable infrastructure, and polished UX."
            isHero
          />

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to="Projects"
              smooth
              duration={500}
              className="cursor-pointer rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:scale-105"
            >
              View selected work
            </Link>

            <Link
              to="Contact"
              smooth
              duration={500}
              className="cursor-pointer rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/90 transition-colors duration-200 hover:border-cyan-400/80 hover:text-white"
            >
              Start a project
            </Link>

            <a
              href="/Hussein-CV.pdf"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors duration-200 hover:border-purple-400/80 hover:text-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Featured skill pills */}
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-12 flex w-full flex-wrap justify-center gap-3 sm:gap-4"
        >
          {featuredSkills.map((skill) => (
            <motion.li
              key={skill.id}
              variants={itemVariants}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-200 shadow-sm shadow-black/20 backdrop-blur hover:border-cyan-400/60 hover:bg-white/10"
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/10">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="h-5 w-5 object-contain"
                />
              </span>
              <span className="font-medium">{skill.name}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Profile highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-12 w-full max-w-3xl"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="grid gap-6 p-8 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-cyan-500/20 sm:h-32 sm:w-32">
                <img
                  src="/assets/others/profile.png"
                  alt="Hussein Nasrallah"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left sm:text-start">
                <p className="text-sm uppercase tracking-wide text-cyan-300">
                  Currently building impactful experiences
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Hussein Nasrallah
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  Full stack engineer with a strong focus on performant UI,
                  efficient APIs, and resilient cloud infrastructure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="mt-16 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm shadow-black/20 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
            >
              <div
                className={`text-3xl font-bold text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-white">
                {stat.label}
              </div>
              <p className="mt-1 text-xs text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default Header;
