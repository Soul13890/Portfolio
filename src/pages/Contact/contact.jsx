import { useEffect } from "react";
import Header from "../../components/Header/header"
import Contact_Form from "../../components/Contact_Form/contact_form";
import Contact_Intro from "../../components/Contact/contact";

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <div>
      <Header />
      <Contact_Intro />
      <Contact_Form />
    </div>
  )
}

export default Contact