import projects_data from "../../datas/Projects.json";
import Project from "../Project/project";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

function Projects_Intro() {
  const MotionLink = motion(Link);
  const location = useLocation();

  return (         
      <section id="my-projects" className='projects-intro-container flex flex-col gap-8 max-w-[1240px] w-full'>
          {location.pathname === "/projects" && <MotionLink to={`/`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />Retour</MotionLink>}
          <h2>J'ai travaillé sur...</h2>
          <ul className='projects-list flex flex-col gap-8'>
              {location.pathname === "/projects" && projects_data.map(({id, name, cover, desc, icons, categories, github}) => (              
                <li className="project-item" key={id}>
                    <Project                                                   
                        id={id}
                        name={name}
                        cover={cover}
                        desc={desc}
                        icons={icons}
                        categories={categories}
                        github={github}
                    />
                </li>
              ))}
              {location.pathname === "/" &&
                projects_data
                    .filter(project => project.highlighted)      // <= on garde seulement les highlightés
                    .map(({ id, name, cover, desc, icons, categories, github }) => (
                    <li className="project-item" key={id}>
                        <Project
                        id={id}
                        name={name}
                        cover={cover}
                        desc={desc}
                        icons={icons}
                        categories={categories}
                        github={github}
                        />
                    </li>
                    ))
                }
                {location.pathname === "/" &&<MotionLink to={`/projects`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Autres projets<IoIosArrowRoundForward/></MotionLink>} 
          </ul>
          {location.pathname === "/projects" && <MotionLink to={`/`} className="flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />Retour</MotionLink>}  
      </section>   
  )
}

export default Projects_Intro