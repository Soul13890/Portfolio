import Network from "../Network/network"

function Introduction() {

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

  return (
    <section className='intro-container flex flex-col gap-3 max-w-[1240px] w-full'>
      <h2>Florian Badenes</h2>
      <h3>Développeur Full Stack</h3>
      <p>Développeur de {age} ans, je suis passionné de développement depuis 10 ans.
        J'ai travaillé dans le développement d'automates industriels, de jeux vidéos et web.
      </p>
      <Network/>
    </section>
  )
}

export default Introduction