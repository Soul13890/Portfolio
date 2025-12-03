import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";

function Contact_Form() {
    
  const formRef = useRef(null);
  const MotionLink = motion(Link);

  const handleSubmit = (e) => {    
    setTimeout(() => {      
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 100);
  };

  return (
    <section className="contact-form-container flex flex-col gap-4 max-w-[1240px] w-full" id="contact">
        <MotionLink to={`/`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />Retour</MotionLink>
        <section className="contact-form-intro flex flex-col gap-4" id="contact">
                <h2>Envie de travailler ensemble ?</h2>
                <h3>N'hésitez pas à me contacter</h3>
        </section>            
        <form action="https://formspree.io/f/mkgewzlg" method="POST" ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="email">Votre email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Votre message</label>
            <textarea id="message" name="message" rows="6" required></textarea>

            <motion.button type="submit" className="flex content-center gap-2 w-fit mx-auto self-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Envoyer <MdOutlineEmail /></motion.button>
        </form>
    </section>
  )
}

export default Contact_Form