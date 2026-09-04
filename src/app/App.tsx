import { lazy, Suspense } from "react";

import Nav from "../components/layout/Nav";
import Hero from "../components/sections/Hero";
import SectionFallback from "../components/ui/SectionFallback";

// Everything below the fold loads on demand.
const Problems = lazy(() => import("../components/sections/Problems"));
const Work = lazy(() => import("../components/sections/Work"));
const Approach = lazy(() => import("../components/sections/Approach"));
const Stack = lazy(() => import("../components/sections/Stack"));
const Experience = lazy(() => import("../components/sections/Experience"));
const About = lazy(() => import("../components/sections/About"));
const Services = lazy(() => import("../components/sections/Services"));
const Contact = lazy(() => import("../components/sections/Contact"));
const Footer = lazy(() => import("../components/layout/Footer"));

const App = () => {
  return (
    <>
      <Nav />

      <main id="main">
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <Problems />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Work />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Approach />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Stack />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
