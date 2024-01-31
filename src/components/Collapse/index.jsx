import React, {useState} from 'react'
import arrowOnPageAbout from '../../assets/arrowOnPageAbout.svg'
import '../../styles/Collapse.scss'
function Collapse(){
    const [isVisible1, setisVisible1] = useState(false)
    const [isVisible2, setisVisible2] = useState(false)
    const [isVisible3, setisVisible3] = useState(false)
    const [isVisible4, setisVisible4] = useState(false)
    
    return(
        <div className="about-section">
            <article>
                <section className="about-section__display">
                    <h2 className="about-section__title">Fiabilité</h2>
                    <button  className={isVisible1 ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={(target) => (setisVisible1(!isVisible1)) }>
                        <img src={arrowOnPageAbout} alt=""/> 
                    </button>
                </section>
                {isVisible1 && (
                    <section className="about-section__hidden" >
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </section>
                )}
            </article>
            <article>
                <section className="about-section__display">
                    <h2 className="about-section__title">Respect</h2>
                    <button className={isVisible2 ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={() => setisVisible2(!isVisible2)}>
                        <img src={arrowOnPageAbout} alt=""/> 
                    </button>
                </section>
                {isVisible2 && (
                    <section className="about-section__hidden">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </section>
                )}
            </article>
            <article>
                <section className="about-section__display" >
                    <h2 className="about-section__title">Service</h2>
                    <button className={isVisible3 ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={() => setisVisible3(!isVisible3)}>
                        <img src={arrowOnPageAbout} alt=""/>                        
                    </button>
                </section>
                {isVisible3 && (
                    <section className="about-section__hidden" >
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </section>
                )}
            </article>
            <article>
                <section className="about-section__display" >
                    <h2 className="about-section__title">Sécurité</h2>
                    <button className={isVisible4 ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={() => setisVisible4(!isVisible4)}>
                        <img src={arrowOnPageAbout} alt=""/> 
                    </button>
                </section>
                {isVisible4 && (
                    <section className="about-section__hidden">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </section>
                )}
            </article>
        </div>
    )
}
export default Collapse
