import { useEffect } from "react";
import Header from "../../components/Header/header"
import Contact_Form from "../../components/Contact_Form/contact_form";

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (    
    <>
      <Header />      
      <Contact_Form />
    </>
  )
}

export default Contact