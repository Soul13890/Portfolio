import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail, MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { scale, stagger } from "motion";

function Network() {
  return (
    <div className='network-container flex gap-4'>
        <motion.a href="#contact" className="flex justify-center content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><MdOutlineEmail />Contactez-moi</motion.a>
        <motion.a href="https://github.com/Soul13890" target="_blank" className="flex justify-center content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><FaGithub />Mon GitHub</motion.a>
        <motion.a href="/files/CV.pdf" target="_blank" download className="flex justify-center content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><MdOutlineFileDownload />Télécharger mon CV</motion.a>
    </div>
  )
}

export default Network