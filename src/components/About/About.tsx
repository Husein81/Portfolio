import { motion } from "framer-motion";
import Icon from "../icon";
import { expertise, services, stats } from "./config";
import ServiceCard from "./service-card";
import GradientSphere from "../GradientSphere";
import Heading from "../Heading";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const age = new Date().getFullYear() - 2002;

  return (
    <section
      id="About"
      className="relative overflow-hidden bg-[#070B12] py-24 sm:py-28"
    >
      {/* Ambient glow */}
      <GradientSphere />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center"
        >
          <Heading
            preTitle="About Me"
            title="Building reliable products with a human touch."
            description="I’m Hussein Nasrallah, a full stack engineer turning complex product ideas into polished, scalable experiences."
          />
        </motion.div>

        {/* Intro grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-10 lg:grid-cols-[320px_1fr]"
        >
          {/* Profile card */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-black/25 backdrop-blur"
          >
            <div className="absolute inset-x-0 -top-48 h-64 bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-transparent blur-3xl" />
            <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-2xl border border-white/20 shadow-lg shadow-cyan-500/30">
              <img
                src="/assets/others/profile.png"
                alt="Hussein Nasrallah"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative mt-6 space-y-2">
              <h3 className="text-2xl font-semibold text-white">
                Hussein Nasrallah
              </h3>
              <p className="text-sm font-medium text-cyan-300">
                Software Engineer
              </p>
              <p className="text-xs text-gray-400">
                {age} years old · Based in Lebanon
              </p>
            </div>

            <div className="relative mt-8 space-y-3 text-left">
              {expertise.map((item) => (
                <div
                  key={`expertise-${item.label}`}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Icon name={item.icon} className="h-5 w-5 text-cyan-300" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-gray-100">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#Contact"
              className="relative mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition-transform duration-200 hover:scale-105"
            >
              Let’s collaborate
            </a>
          </motion.div>

          <div className="flex flex-col gap-20">
            {/* Narrative */}
            <motion.div
              variants={fadeUp}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold text-white">
                Driven by curiosity and high standards
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                <p>
                  I’ve spent the past four years helping teams launch products
                  from MVPs to production platforms while balancing speed,
                  reliability, and thoughtful UX. My work spans web, mobile, and
                  backend systems built with technologies like React, Next.js,
                  ASP.NET, Node.js, and React Native.
                </p>
                <p>
                  Beyond shipping features, I focus on creating resilient
                  architectures, automating workflows, and maintaining
                  development velocity as products scale. Every engagement
                  starts with clarity and ends with measurable impact.
                </p>
                <p>
                  When I’m not heads-down solving engineering puzzles, you’ll
                  find me iterating on project ideas, following the latest
                  developer tooling, or experimenting with design systems.
                </p>
              </div>
            </motion.div>
            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={`stat-${stat.label}`}
                  variants={fadeUp}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-sm shadow-black/20 backdrop-blur transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="text-3xl">{stat.icon}</div>
                  <p
                    className={`mt-4 bg-gradient-to-r ${stat.color} bg-clip-text text-3xl font-bold text-transparent`}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-gray-200">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              What I help teams accomplish
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300 sm:text-base">
              Partnering on end-to-end product delivery—from strategy and design
              foundations to scalable deployment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={`service-${service.title}`}
                service={service}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
