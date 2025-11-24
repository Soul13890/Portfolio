import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header"
import Project from "../../components/Project/project";
import Projects_Infos from "../../components/Project_Infos/project_infos"
import projects_data from "../../datas/Projects.json"
import Projects_Intro from "../../components/Projects_Intro/projects_intro";

function Projects() {

  const { id } = useParams();
  const project = id ? projects_data.find(item => item.id === id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />      
      {id && project ? (
        // Affichage du détail d'un projet
        <section className="project-infos-container">
          <Project
            id={project.id}
            name={project.name}
            cover={project.cover}
            desc={project.desc}
            icons={project.icons}
            categories={project.categories}
            github={project.github}
          />
          <Projects_Infos project={project} />
        </section>
      ) : (
        // Affichage de la liste des projets
        <Projects_Intro/>       
      )}
    </>
  );
}

export default Projects