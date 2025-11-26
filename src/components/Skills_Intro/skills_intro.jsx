import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function Skills_Intro() {

    const MotionLink = motion(Link);

  return (
    <section className='skills-intro-container flex flex-col gap-8 max-w-[1240px] w-full'>
        <h2>J'adore travailler avec...</h2>
        <ul className="skills-intro-list">
            <li className="flex flex-col gap-3">
                <img src="icons/js.svg" alt="Logo Javascript" />
                <h3>Javascript</h3>
                <p>Expérimenté avec JavaScript, je maîtrise les bases comme les concepts modernes de l’ES6+, ce qui me permet de développer des fonctionnalités interactives, d’assurer une logique applicative claire et de construire des interfaces web fluides et performantes.</p>
            </li>
            <li className="flex flex-col gap-3">
                <img src="icons/react.svg" alt="" />
                <h3>React.js</h3>
                <p>Familier avec l'utilisation de React, je suis capable de concevoir des applications web dynamiques et réactives avec React, en tirant parti du rendu côté serveur et de la génération statique pour optimiser les performances et l’expérience utilisateur.</p>
            </li>
            <li className="flex flex-col gap-3">
                <img src="icons/tailwind.svg" alt="" />
                <h3>Tailwind CSS</h3>
                <p>Compétent avec l’utilisation de Tailwind CSS, je conçois rapidement des interfaces personnalisées, réactives et cohérentes, en m’appuyant sur un système d’utilitaires qui garantit un développement UI propre, modulable et évolutif.</p>
            </li>
        </ul>
        <MotionLink to="/about" className="flex content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Autres Compétences<IoIosArrowRoundForward /></MotionLink>
    </section>
  )
}

export default Skills_Intro