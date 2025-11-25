import studies_data from "../../datas/Studies.json"
import Diplomas from "../Diplomas/diplomas"

function Studies() {
    return(
        <section className="studies-container flex flex-col gap-[50px] max-w-[1240px] w-full">
            <h2>Mes formations</h2>
            <ul className="studies-list">
                {studies_data.map(({id, name, cover, establishment, location, year, level, description, skills}) => (                    
                    <li className="studies-item" key={id}>
                        <Diplomas
                            id={id}                                  
                            name={name}
                            cover={cover}
                            establishment={establishment}
                            location={location}
                            year={year}
                            level={level}
                            description={description}
                            skills={skills}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Studies