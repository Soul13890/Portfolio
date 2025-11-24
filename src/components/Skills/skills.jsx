import skills_data from "../../datas/Skills.json";
import Skill from "../Skill/skill";

function Skills() {
  return (
    <section id="skills" className='skills-container flex flex-col gap-[50px] max-w-[1240px] w-full'>
        <h2>Mes compétences</h2>
        <ul className='skills-list'>
                {skills_data.map(({id, icon, name, level}) => (                    
					<li className="skill-item" key={id}>
                        <Skill                                                    
                            icon={icon}
                            name={name}
                            level={level}
                            visualParts={level}							
                        />
                    </li>
                ))}
            </ul>
    </section>
  )
}

export default Skills