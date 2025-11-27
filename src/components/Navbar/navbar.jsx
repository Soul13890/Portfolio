import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useMeasure } from "@react-hookz/web";
import { useMediaQuery } from "@react-hookz/web";
import Hamburger from "../Hamburger/hamburger";
import { motion, AnimatePresence } from "framer-motion";
import { scale, stagger } from "motion";

function Navbar() {

  const currentHash = window.location.hash;
  const isDesktop = useMediaQuery("(min-width: 767px)");

  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null)
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    if (isDesktop) {
      setHamburgerOpen(false);
    }
  }, [isDesktop]);

  const toggleHamburger = () =>{
    setHamburgerOpen(!hamburgerOpen)
  }

  const itemVariants = isDesktop
  ? {
      open: { y: 0, opacity: 1 },
      closed: { y: 0, opacity: 1 },
    }
  : {
      open: { y: 0, opacity: 1, transition: { stiffness: 1000, velocity: -100 } },
      closed: { y: 50, opacity: 0, transition: { stiffness: 1000 } },
    };

  const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

  const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${250 * 2 + 200}px at calc(100% - 37px) 35px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at calc(100% - 37px) 35px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
  }

  return (
    <motion.nav initial={false} animate={hamburgerOpen ? "open" : "closed"} custom={bounds?.height} ref={ref} className={`h-8 ${hamburgerOpen ? 'open' : ''} `}>
      <motion.div variants={sidebarVariants} className={`nav-circle ${isDesktop ? 'hidden' : ''} `}/>
      <AnimatePresence>
        {(hamburgerOpen || isDesktop) && (
          <motion.ul
            key="nav-ul"
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex gap-5"
          >
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className={currentHash === "#/about" ? "active" : ""}>
              <Link to="/about">À propos</Link>
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className={currentHash === "#/projects" ? "active" : ""}>
              <Link to="/projects">Mes projets</Link>
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className={currentHash === "#/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>    
      <motion.div className="hamburger" onClick={toggleHamburger}>        
        <Hamburger isOpen={hamburgerOpen}/>         
      </motion.div>         
    </motion.nav>
  );
}

export default Navbar;
