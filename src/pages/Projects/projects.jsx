import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/header"
import Project from "../../components/Project/project";
import Projects_Infos from "../../components/Project_Infos/project_infos"
import projects_data from "../../datas/Projects.json"

function Projects() {

  const { id } = useParams();
  const project = projects_data.find(item => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (  
    <div>
      <Header />
      <section className="project-infos-container">
        <Project                                                   
          id={project.id}
          name={project.name}
          cover={project.cover}
          desc={project.desc}
          icons={project.icons}
          categories={project.categories} 						
        />
        <Projects_Infos project={project} />
      </section>
    </div>
  )
}

export default Projects