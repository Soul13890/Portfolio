import Experience from "../Experience/experience"
import exp_data from "../../datas/Experiences.json"

function Experiences(){

    return(
        <section className="experiences-container flex flex-col gap-[50px] max-w-[1240px] w-full">
            <h2>Mon expérience</h2>
            <ul className="experiences-list flex flex-col gap-[30px]">
                {exp_data.map(({id, name, cover, establishment, location, year, type, description, skills}) => (                    
                    <li className="experience-item" key={id}>
                        <Experience
                            id={id}                                  
                            name={name}
                            cover={cover}
                            establishment={establishment}
                            location={location}
                            year={year}
                            type={type}
                            description={description}
                            skills={skills}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Experiences