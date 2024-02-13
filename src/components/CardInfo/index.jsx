import { useParams } from "react-router-dom";
import React, {useState} from 'react'
import arrowOnPageAbout from '../../assets/arrowOnPageAbout.svg'

function CardInfo({data}) {
  const { id } = useParams();

  const [isVisible1, setisVisible1] = useState(false)
  const [isVisible2, setisVisible2] = useState(false)
  
  return (
    <>
      <section className="info">
          {data
            .filter((item) => item.title === id)
            .map((item) => (
              <div className="card-info" key={id}>
                <section className = "top_info">
                  <div className = "card-info__title-tag">
                    <h2>{item.title}</h2>
                    <p className ="card__info-location">{item.location}</p>
                    <p className ="card__info-tags">{item.tags}</p>
                  </div>
                  <div className = "card__info-owner-rating">
                    <div className = "card__info-owner">
                      <p>{item.host.name}</p>
                      <img className = "card_img" src={item.host.picture} alt="Propriétaire du logement" />
                    </div>
                    <div className = "card__info-rating">
                    </div>
                  </div>
                </section>
                <section className = "card__info-description-equipment">
                  <div className = "card__info-description">
                    <section className="about-section__display">
                      <h2 className="about-section__title">Description</h2>
                      <button  className={isVisible1 ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={(target) => (setisVisible1(!isVisible1)) }>
                          <img src={arrowOnPageAbout} alt=""/> 
                      </button>
                    </section>
                    {isVisible1 && (
                      <section className="about-section__hidden" >
                        <p>{item.description}</p>
                      </section>
                    )}
                  </div>
                  <div className = "card__info-equipment">
                    <section className="about-section__display">
                      <h2 className="about-section__title">Equipements</h2>
                      <button  className={isVisible2 ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={(target) => (setisVisible2(!isVisible2)) }>
                          <img src={arrowOnPageAbout} alt=""/> 
                      </button>
                    </section>
                    {isVisible2 && (
                      <section className="about-section__hidden" >
                        <p>{item.equipments}</p>
                      </section>
                    )}
                  </div>
                </section>
              </div>
            ))}
      </section>
    </>
  );
}

export default CardInfo;