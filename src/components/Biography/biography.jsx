

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

        <section className="biography-container flex gap-[50px] max-w-[1240px] w-full">
            <div className="biography-infos flex flex-col justify-center items-center gap-3">
                <img src="picture.webp" alt="Photo de Badenes Florian"/>
                <p>Badenes Florian</p>
                <p>{age} ans</p>
            </div>
            <div className="flex flex-col gap-4">
                <h2>À propos de moi</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem numquam eaque quod! Accusamus voluptatum, quibusdam at placeat praesentium delectus omnis? Error minus atque officia inventore distinctio omnis? Reprehenderit, quisquam.
                Praesentium optio quaerat repellendus repudiandae asperiores fuga sequi velit beatae, aspernatur consectetur veniam, totam ratione vitae atque eum odit quam illum ipsa alias fugiat culpa porro ab nostrum iusto. Illo.
                Veritatis laboriosam iusto totam, nulla, aspernatur praesentium autem esse vero labore ducimus pariatur perspiciatis mollitia maiores minus? Provident saepe ipsa doloribus magnam tenetur adipisci, delectus, doloremque veritatis voluptatem vero modi!</p>
            </div>
        </section>
    )
}
export default Biography