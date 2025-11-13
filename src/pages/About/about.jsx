import { useEffect } from "react";
import Header from "../../components/Header/header"

function About() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <h2>À propos</h2>    
    </div>
  )
}

export default About