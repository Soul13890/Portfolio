import projects_data from "../../datas/Projects.json";
import Project from "../Project/project";

function Projects_Intro() {

  return (
    <section id="my-projects" className='projects-intro-container flex flex-col gap-8 max-w-[1240px] w-full'>
        <h2>J'ai travailler sur...</h2>
        <ul className='projects-list'>
            {projects_data.map(({id, name, cover, desc, icons, categories}) => (              
				<li className="project-item" key={id}>
                    <Project                                                   
                        id={id}
                        name={name}
                        cover={cover}
                        desc={desc}
                        icons={icons}
                        categories={categories}  						
                    />
                </li>
            ))}
        </ul>    
    </section>
  )
}

export default Projects_Intro