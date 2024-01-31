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
        
        <Collapse />
      </main>
    </>
    )
}

export default About