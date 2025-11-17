import { useEffect } from "react";
import Header from "../../components/Header/header"
import Introduction from "../../components/Introduction/introduction";
import Skills from "../../components/Skills/skills";

function About() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <Introduction/>
      <Skills/>
    </div>
  )
}

export default About