import { Link } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { scale } from "motion";

function Project_Infos({ project }) {
  
  const MotionLink = motion(Link);
  return (
    <section className="project-infos-content flex flex-col content-center gap-8">
      <article>
        <h4>Contexte</h4>
        <p>{project.content.context}</p>
      </article>      
      <article>
        <h4>Objectifs</h4>
        <p>{project.content.objectives}</p>
      </article>
      <article>
        <h4>Outils utilisés</h4>
        <p>{project.content.tools}</p>
      </article>
      <article>
        <h4>Compétences développées</h4>
        <p>{project.content.skills}</p>
      </article>
      <article>
        <h4>Résultats obtenus</h4>
        <p>{project.content.results}</p>
      </article>
      <article>
        <h4>Améliorations futures</h4>
        <p>{project.content.ameliorations}</p>
      </article>
      {location.pathname.includes("/projects") && <MotionLink to={`/`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />Retour</MotionLink>}
    </section>
  );
}

export default Project_Infos;