import Banner from "../../components/Banner";
import Gallery from "../../components/Card";
import imageBannerHome from '../../assets/imageBannerHome.png'
import '../../components/Banner/Banner.scss'
import '../../components/Card/Card.scss'


function Home() {

  return (
    
    <>
      <main>
        <div className = "banner__type">
          <div id = "banner__type--img">
            <Banner
              image ={imageBannerHome} 
              alt = "vu d'un paysage lors d'un voyage de rêve" 
              text="Chez vous, partout et ailleurs" 
            >
            </Banner>
          </div>
        </div>
        <div className = "gallery">
          <Gallery />
        </div>
      </main>
    </>
  )
}

export default Home;
