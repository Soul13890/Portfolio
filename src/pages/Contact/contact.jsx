import { useEffect } from "react";
import Header from "../../components/Header/header"

function Contact() {  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <h2>Contact</h2> 
    </div>
  )
}

export default Contact