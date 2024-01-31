import {lodgingsList} from '../../datas/lodgingsList'

// State

function Gallery() {
//state (état, données)
    const categories = lodgingsList
//comportements

//affichage (render)
    return (
        <div className='gallery__cards'>
                {categories.map((card) => (
                    <a href="#" key={card.id}>
                        <article className='card'>
                            <img 
                                src ={card.cover}
                                alt = "présentation du logement à louer"
                                />
                            <h2 className="card__title">{card.title}</h2>
                        </article>
                    </a>
                ))}
        </div>
    )
}

export default Gallery
