import { lazy, Suspense } from "react";
import { Header, Navbar } from "../components";
import Spinner from "../components/Spinner";

// Lazy load heavy components
const About = lazy(() => import("../components/About/About"));
const Projects = lazy(() => import("../components/project/Projects"));
const Skills = lazy(() => import("../components/skills/Skills"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Footer = lazy(() => import("../components/Footer/Footer"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-128">
          <Spinner />
        </div>
      }
    >
      <div className="overflow-hidden">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <div className="z-40 relative">
          <Contact />
          <Footer />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
