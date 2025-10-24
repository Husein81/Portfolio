import { lazy, Suspense } from "react";
import { Header, Navbar } from "../components";
import Icon from "../components/icon";

// Lazy load heavy components
const About = lazy(() => import("../components/About/About"));
const Projects = lazy(() => import("../components/project/Projects"));
const Skills = lazy(() => import("../components/skills/Skills"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const Footer = lazy(() => import("../components/Footer/Footer"));

// Loading fallback component
const Spinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <Icon name="Loader" className="animate-spin size-12" />
  </div>
);

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header />
      <Suspense fallback={<Spinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Skills />
      </Suspense>
      <div className="z-40 relative">
        <Suspense fallback={<Spinner />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
