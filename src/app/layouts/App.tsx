import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Header/Navbar";
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
