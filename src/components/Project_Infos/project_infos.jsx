function Project_Infos({ project }) {
  const currentRoute = window.location.pathname;
  
  return (
    <section className="project-infos-content flex flex-col content-center gap-8">
      <article>
        <h4>Contexte</h4>
        <p>{project.content.context}</p>
      </article>      
      <article>
        <h4>Objectifs</h4>
        <p>{project.content.objectives}</p>
      </article>
      <article>
        <h4>Outils utilisés</h4>
        <p>{project.content.tools}</p>
      </article>
      <article>
        <h4>Compétences développées</h4>
        <p>{project.content.skills}</p>
      </article>
      <article>
        <h4>Résultats obtenus</h4>
        <p>{project.content.results}</p>
      </article>
      <article>
        <h4>Améliorations futures</h4>
        <p>{project.content.ameliorations}</p>
      </article> 
    </section>
  );
}

export default Project_Infos;