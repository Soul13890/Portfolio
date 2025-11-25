import { LuSchool } from "react-icons/lu";
import { MdLocationOn } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { IoSchool } from "react-icons/io5";

function Diplomas({id, name, cover, establishment, location, year, level, description, skills}){

    return(
        <article className="diplomas-container flex flex-col justify-between gap-4">
            <div className="flex">
                <img src={cover} alt="Logo de l'établissement" />
                <div className="diplomas-infos flex flex-col gap-2">
                    <h3>{name}</h3>
                    <ul className="flex gap-4">
                        <li className="flex items-center gap-1"><LuSchool />{establishment}</li>
                        <li className="flex items-center gap-1"><MdLocationOn />{location}</li>
                        <li className="flex items-center gap-1"><IoCalendarOutline />{year}</li>
                        <li className="flex items-center gap-1"><IoSchool />{level}</li>
                    </ul>
                </div>                
            </div>
            <p>{description}</p>
            <ul className="skills-acquired flex gap-2">
                {skills.map((skill, index) => (              
                    <p key={index}>{skill}</p>
                ))}
            </ul>          
        </article>
    )
}
export default Diplomas