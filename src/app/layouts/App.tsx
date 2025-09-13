import {
  About,
  Contact,
  Footer,
  Header,
  Navbar,
  Projects,
  Skills,
} from "../../components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />

      <Skills />
      <div className="z-40  relative">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
