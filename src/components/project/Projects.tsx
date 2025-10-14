import { PROJECTS } from "./config";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="relative container mx-auto mt-20 p-6" id="Projects">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-shark/30 via-transparent to-primary/20 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-mountain-meadow via-secondary to-accent bg-clip-text text-transparent mb-4">
            Featured Projects
          </h1>
          <p className="text-iron text-lg max-w-3xl mx-auto mb-6">
            Explore my portfolio of innovative projects showcasing modern
            development practices and cutting-edge technologies
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-mountain-meadow to-accent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <ProjectList projects={PROJECTS} />
      </div>
    </section>
  );
};
export default Projects;
