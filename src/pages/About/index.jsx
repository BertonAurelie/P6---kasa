import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse"
import imageBannerAbout from '../../assets/imageBannerAbout.png'
import '../../styles/Banner.scss'
import '../../styles/index.scss'

function About() {
    return (
    <>
      <main>
        <div className = "banner__type">
          <Banner
          image ={imageBannerAbout} 
          alt = "vu d'un paysage lors d'un voyage de rêve" 
          >
          </Banner>
        </div>
        
        <Collapse 
        title = "Fiabilité"
        paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse 
        title = "Respect"
        paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse 
        title = "Service"
        paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse 
        title = "Sécurité"
        paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      
      </main>
    </>
    )
}

export default About