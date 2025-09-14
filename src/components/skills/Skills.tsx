import SkillLists from "./SkillLists";
import { Button as LinkButton } from "react-scroll";

const Skills = () => {
  return (
    <section className="relative py-12 md:py-20" id="Skills">
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-mountain-meadow via-secondary to-accent bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          <p className="text-iron text-base md:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-mountain-meadow to-accent mx-auto mt-4 rounded-full"></div>
        </div>

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
