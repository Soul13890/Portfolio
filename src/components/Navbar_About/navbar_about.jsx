import { motion } from "motion/react";
import { scale } from "motion/react";

function Navbar_About() {

    return(
        <ul className="navbar-about-container flex justify-center content-center gap-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a href="#skills">Compétences</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a>Expériences</a></motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><a>Diplômes</a></motion.li>
        </ul>
    )
}

export default Navbar_About