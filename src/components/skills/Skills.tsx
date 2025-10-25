import { Button as LinkButton } from "react-scroll";
import GradientSphere from "../GradientSphere";
import Heading from "../Heading";
import SkillLists from "./SkillLists";

const Skills = () => {
  return (
    <section className="relative py-12 md:py-20" id="Skills">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      {/* Content */}
      <GradientSphere />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <Heading
          preTitle="Tools & Technologies"
          title="Powering my favorite frameworks & tools"
          description="A focused collection of technologies that help me ship delightful, high-quality products."
        />

        {/* Skills Grid */}
        <div className="mb-12 md:mb-16">
          <SkillLists />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center flex-col sm:flex-row gap-4 mt-6 md:mt-8 px-4">
          <LinkButton
            to="Contact"
            className="group relative px-6 md:px-8 py-3 bg-gradient-to-r from-mountain-meadow to-secondary hover:from-mountain-meadow/80 hover:to-secondary/80 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-none text-center"
            smooth={true}
            duration={1000}
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-mountain-meadow/40 to-secondary/40 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </LinkButton>

          <a
            className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-center"
            download
            href="/Hussein-Nasrallah-CV.pdf"
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/40 to-purple/40 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
