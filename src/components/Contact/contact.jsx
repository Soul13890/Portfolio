import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function Network() {
    
    const MotionLink = motion(Link);

  return (
    <section className="contact-container flex flex-col gap-4 max-w-[1240px] w-full" id="contact">
        <h2>Envie de travailler ensemble ?</h2>
        <h3>N'hésitez pas à me contacter</h3>
        <MotionLink to="/contact" className="flex content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contactez-moi<IoIosArrowRoundForward /></MotionLink>
    </section>
  )
}

export default Network