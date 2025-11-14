import Network from "../Network/network"

function Introduction() {
  return (
    <section className='intro-container flex flex-col gap-3 max-w-[1240px] w-full'>
      <h2>Florian Badenes</h2>
      <h3>Développeur Full Stack</h3>
      <p>Développeur de 31 ans, je suis passionné de développement depuis 10 ans.
        J'ai travaillé dans le développement d'automates industriels, de jeux vidéos et web.
      </p>
      <Network/>
    </section>
  )
}

export default Introduction