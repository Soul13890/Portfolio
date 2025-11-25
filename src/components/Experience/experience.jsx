import { MdLocationOn } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";

function Experience({ id, name, cover, establishment, location, year, type, description, skills}) {
    return (
        <article className="experience-container flex flex-col gap-[30px]">
            <div className="flex">
                <img src={cover} alt="Logo de l'établissement" />
                <div className="experience-infos flex flex-col gap-2">
                    <h3>{establishment}</h3>
                    <h4>{name}</h4>
                    <ul className="flex gap-4">                        
                        <li className="flex items-center gap-1">
                            <MdLocationOn />{location}
                        </li>
                        <li className="flex items-center gap-1">
                            <IoCalendarOutline />{year}
                        </li>
                        <li className="flex items-center gap-1">
                            <LuScrollText />{type}
                        </li>
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
export default Experience;
