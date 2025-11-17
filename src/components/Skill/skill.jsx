function Skill({icon, name, level}) {    
    return (
    <>                
        <div className="skill-item-level-container">
            <div className="skill-item flex justify-between content-center" style={{width: `${level}%`}}>
                <div className="flex justify-center content-center gap-3">
                    <img src={icon} alt={"Icone de ${name}"} />
                    <h3 className="skill-item-name">{name}</h3>
                </div>                
                <div className="skill-item-level">{level}%</div>
            </div>
        </div>
    </>
  )
}

export default Skill