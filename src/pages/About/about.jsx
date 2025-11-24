import { useEffect } from "react";
import Header from "../../components/Header/header"
import Biography from "../../components/Biography/biography";
import Skills from "../../components/Skills/skills";
import Experiences from "../../components/Experiences/experiences";
import Diplomas from "../../components/Diplomas/diplomas";

function About() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <>
      <Header /> 
      <Biography/>         
      <Skills/>
      <Experiences/> 
      <Diplomas/>
    </>
  )
}

export default About