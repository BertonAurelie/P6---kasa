import Collapse from '../Collapse'
import Rating from '../Rating'

function CardInfo(props) {
  const item = props.item;
  const id = props.id

  
  return (
    <>
          
      <section className="card-info" key={id}>
        <section className = "top_info">
          <div className = "card-info__title-tag">
            <h2>{item.title}</h2>
            <p className ="card__info-location">{item.location}</p>
            <div className ="card__info-tags" >
            {
              item.tags
                ? item.tags.map((tag, index) => (
                  <div className="tag"key={index}>
                    <li>{tag}</li>
                  </div>
                  ))
                : 'Aucun tag disponible'
            }
            </div>
          </div>
          <div className = "card__info-owner-rating">
            <div className = "card__info-owner">
              <p>{item.host.name}</p>
              <img className = "card_img" src={item.host.picture} alt="Propriétaire du logement" />
            </div>
            <div className = "card__info-rating">
              <Rating
                  item={item}
                  id={id}
              />
            </div>
          </div>
        </section>
        <section className = "card__info-description-equipment">
          <div className = "card__info-description">
          <Collapse
            title="Description"
            paragraph = {item.description}
            />
          </div>
          <div className = "card__info-equipment">
            <Collapse
            title="Equipements"
            paragraph = 
            {
              item.equipments
                ? item.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))
                : 'Aucun équipement disponible'
            }                          
            />
          </div>
        </section>
      </section>
            
    </>
  );
}

export default CardInfo;