import { useEffect } from "react";
import Header from "../../components/Header/header"
import Introduction from "../../components/Introduction/introduction";
import Contact from "../../components/Contact/contact"

function Home() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <Introduction />
      <Contact/>
    </div>
  )
}

export default Home