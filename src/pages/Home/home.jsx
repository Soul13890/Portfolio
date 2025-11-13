import { useEffect } from "react";
import Header from "../../components/Header/header"

function Home() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <h2>Accueil</h2> 
    </div>
  )
}

export default Home