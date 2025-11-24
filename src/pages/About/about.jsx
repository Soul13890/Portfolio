import { useEffect } from "react";
import Header from "../../components/Header/header"
import Skills from "../../components/Skills/skills";
import Introduction from "../../components/Introduction/introduction";
import Navbar_About from "../../components/Navbar_About/navbar_about";

function About() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <>
      <Header />
      <Navbar_About />
      <Introduction/>         
      <Skills/>
    </>
  )
}

export default About