import { useEffect } from "react";
import Header from "../../components/Header/header"

function Projects() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (  
    <div>
      <Header />
      <h2>Mes projets</h2>    
    </div>
  )
}

export default Projects