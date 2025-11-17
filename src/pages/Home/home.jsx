import { useEffect } from "react";
import Header from "../../components/Header/header"
import Introduction from "../../components/Introduction/introduction";
import Contact from "../../components/Contact/contact"
import Skills_Intro from "../../components/Skills_Intro/skills_intro";

function Home() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <Introduction /> 
      <Skills_Intro/>  
      <Contact/>
    </div>
  )
}

export default Home