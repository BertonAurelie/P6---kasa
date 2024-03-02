
import { Link } from "react-router-dom";
import data from '../../datas/lodgingsList.json'

function Gallery() {
    return (
        <>
            <div className='gallery__cards'>
                    {data.map((item) => (
                        <Link to={`/logements/${item.title}/`} key={item.id}>
                        <article className='card'>
                            <img src={item.cover}  alt = "présentation du logement à louer" />
                            <h2 className="card__title">{item.title}</h2>    
                        </article>
                        </Link>
                    ))}    
            </div>
        </>
    )
}
export default Gallery