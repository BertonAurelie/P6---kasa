import CardInfo from '../../components/CardInfo'
import Carousel from '../../components/Slideshow'
import './Lodging.scss'
import lodgingsList from '../../datas/lodgingsList'
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Lodging() {
    const { id } = useParams();
    const item = lodgingsList.filter((item) => item.title === id)[0];
    
    if (item === undefined) {
        return <Navigate to="/404" replace />
    }

    return (
        <>
            <main>
                <section className="carousel">
                    <div className ="carousel__content">
                        <Carousel 
                            item={item}
                            id={id}
                        />
                    </div>
                </section>
                <>
                    <CardInfo 
                        item={item}
                        id={id}
                    />

                    
                </>
            </main>
        </>
    )
}

export default Lodging