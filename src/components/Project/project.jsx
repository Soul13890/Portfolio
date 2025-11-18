import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

function Project({id, name, cover, desc, icons, categories}) { 

    const MotionLink = motion(Link);

    return (
    <>               
        <div className="project-item-container flex justify-between content-center gap-8">
            <div className="project-item-infos flex flex-col justify-center gap-8">
                <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>                
                
                <div className="flex content-center gap-4">
                    <ul className='icons-list flex gap-2'>
                        {icons.map((url, index) => (              
                            <li className="icon" key={index}>
                                <img src={url} alt={`Icone ${index + 1}`} />
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
                
                <MotionLink to={`/projects/${id}`} className="flex content-center gap-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Plus d'infos<IoIosArrowRoundForward /></MotionLink>
            </div>
            <img className="project-cover" src={cover} alt="Image du projet" />          
        </div>
    </>
  )
}

export default Project