import React, { useEffect, useState } from "react";

function Skill({icon, name, level}) { 

    const[width, setWidth] = useState(30);

    useEffect(() => {
        let start = 30;
        let end = level;
        let duration = 1000; // 1 seconde
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // progression entre 0 et 1
            const ratio = Math.min(progress / duration, 1);

            const value = start + (end - start) * ratio;
            setWidth(Math.round(value));

            if (ratio < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);
    
    return (
    <>                
        <div className="skill-item-level-container">
            <div className="skill-item flex justify-between content-center" style={{width: `${width}%`}}>
                <div className="flex justify-center content-center gap-3">
                    <img src={icon} alt={"Icone de ${name}"} />
                    <h3 className="skill-item-name">{name}</h3>
                </div>                
                <div className="skill-item-level">{width}%</div>
            </div>
        </div>
    </>
  )
}

export default Skill