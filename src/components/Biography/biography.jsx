

function Biography(){
    
    const birthDate = new Date("1994-10-09");

    // Fonction pour calculer l'âge
    const calculateAge = (dob) => {
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        const dayDiff = today.getDate() - dob.getDate();

        // Vérifie si l'anniversaire est déjà passé cette année
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        }

        return age;
    };

    const age = calculateAge(birthDate);

    return(

        <section className="biography-container flex flex-col gap-2.5 max-w-[1240px] w-full">
            <h2>À propos de moi</h2>
            <article className="flex items-center gap-[50px]">
                <div className="flex flex-col gap-4">                
                    <p>Passionné de développement depuis 10 ans, j'ai travaillé dans le développement d'automates industriels, de jeux vidéos et maintenant je travaille dans le web. Grâce à mon expérience dans ces différents domaines, j'ai pu développer de nombreuses compétences dans différents langages de programmation, ainsi que des méthodes de travail en développement.</p>
                </div>
                <div className="biography-infos flex flex-col justify-center items-center gap-3">
                    <img src="picture.webp" alt="Photo de Badenes Florian"/>
                    <p>Badenes Florian</p>
                    <p>{age} ans</p>
                </div>
            </article>           
        </section>
    )
}
export default Biography