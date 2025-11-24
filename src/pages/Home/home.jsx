import { useEffect } from "react";
import Header from "../../components/Header/header"
import Introduction from "../../components/Introduction/introduction";
import Contact from "../../components/Contact/contact"
import Skills_Intro from "../../components/Skills_Intro/skills_intro";
import Projects_Intro from "../../components/Projects_Intro/projects_intro";

function Home() {  
  
  useEffect(() => {    
    window.scrollTo(0, 0);    
  }, []);

  return (    
    <>
      <Header />
      <Introduction /> 
      <Skills_Intro/>
      <Projects_Intro/>
      <Contact/>
    </>
  )
}

export default Home