import { useEffect } from "react";
import Header from "../../components/Header/header"
import Skills from "../../components/Skills/skills";

function About() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />      
      <Skills/>
    </div>
  )
}

export default About