import Banner from "../../components/Banner";
import Gallery from "../../components/Card";
import imageBannerHome from '../../assets/imageBannerHome.png'
import '../../styles/Banner.scss'
import '../../styles/Card.scss'


function Home() {
  return (
    
    <>
      <main>
        <div className = "banner__type">
          <Banner
            image ={imageBannerHome} 
            alt = "vu d'un paysage lors d'un voyage de rêve" 
            text="Chez vous, partout et ailleurs"
          >
          </Banner>
        </div>
        <div className = "gallery">
          <Gallery />
        </div>
      </main>
    </>
  )
}

export default Home;
