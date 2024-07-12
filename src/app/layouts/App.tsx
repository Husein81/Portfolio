import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Projects from "../../components/project/Projects";
import Skills from "../../components/skills/Skills";

const App = () => {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
