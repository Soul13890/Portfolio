import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Contact_Form() {
    
    const MotionLink = motion(Link);

  return (
    <section className="contact-form-container flex flex-col gap-4 max-w-[1240px] w-full" id="contact">
        <MotionLink to={`/`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />Retour</MotionLink>
        <form action="https://formspree.io/f/mkgewzlg" method="POST">
            <label for="email">Votre email</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Votre message</label>
            <textarea id="message" name="message" rows="10" required></textarea>

            <motion.button type="submit" className="flex content-center gap-2 w-fit mx-auto self-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Envoyer <MdOutlineEmail /></motion.button>
        </form>
    </section>
  )
}

export default Contact_Form