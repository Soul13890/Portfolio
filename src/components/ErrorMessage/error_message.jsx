import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";

function Error_Message(){

    const MotionLink = motion(Link);

    return(
        <div className="error-container">       
        <h2 className="error-container-title">404</h2>
        <p className="error-container-text">Oups! La page que vous demandez n'existe pas.</p>
        <MotionLink  to='/' className="error-container-link flex content-center gap-2 w-fit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><IoIosArrowRoundBack />
            Retourner sur la page d'accueil
        </MotionLink>
    </div>
    )
}

export default Error_Message