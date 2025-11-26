import { Link, useLocation } from "react-router-dom"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { scale } from "motion";

function Project({id, name, cover, desc, icons, categories, github}) { 

    const MotionLink = motion(Link);
    const location = useLocation();

    return (
    <>               
        <div className="project-item-container flex justify-between content-center gap-8">
            <div className="project-item-infos flex flex-col justify-center gap-8">
                {location.pathname.includes("/projects/") && <MotionLink to={`/projects`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />Retour</MotionLink>}
                <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>                
                
                <div className="flex content-center gap-4">
                    <ul className='icons-list flex gap-2'>
                        {icons.map((url, index) => (              
                            <li className="icon" key={index}>
                                <img src={`${import.meta.env.BASE_URL}${url}`} alt={`Icone ${index + 1}`} />
                            </li>
                        ))}
                    </ul>
                    <p className="text-3xl">|</p>
                    <ul className='categories-list flex gap-2'>
                        {categories.map((categorie, index) => (              
                            <li className="categorie" key={index}>
                                {categorie}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex content-center gap-2">
                    {github != "" && <motion.a href={github} target="_blank" rel="noopener noreferrer" className="flex justify-center content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><FaGithub />GitHub</motion.a>}
                    {(location.pathname === "/" || location.hash.startsWith("#/projects")) && <MotionLink to={`/projects/${id}`} className="flex content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Plus d'infos<IoIosArrowRoundForward /></MotionLink>}
                </div>
                
            </div>
            <img className="project-cover" src={`${import.meta.env.BASE_URL}${cover}`} alt="Image du projet" />          
        </div>
    </>
  )
}

export default Project