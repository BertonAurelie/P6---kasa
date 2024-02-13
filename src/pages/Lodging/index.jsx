import CardInfo from '../../components/CardInfo'
import Carousel from '../../components/Slideshow'
import '../../styles/Lodging.scss'
import {lodgingsList} from '../../datas/lodgingsList'

const cardData = lodgingsList

function Lodging() {
    return (
        <>
            <main>
                <>
                    <Carousel data={cardData}/>
                </>
                <>
                    <CardInfo data={cardData}/>
                </>
            </main>
        </>
    )
}

export default Lodging