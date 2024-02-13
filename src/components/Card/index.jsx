
import { Link } from "react-router-dom";
import {lodgingsList} from '../../datas/lodgingsList';

const data = lodgingsList

function Gallery() {
    return (
        <>
            <div className='gallery__cards'>
                    {data.map((item) => (
                        <Link to={`/lodging/${item.title}/`} key={item.id}>
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