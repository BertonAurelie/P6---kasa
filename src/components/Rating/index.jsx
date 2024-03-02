
import starActive  from '../../assets/starActive.svg'
import starInactive from '../../assets/starInactive.svg'

function Rating (props) {
    const item = props.item;
    const number = item.rating;
    /* const index =0 */

    const tab = [0,1,2,4,5]
        
    return (
        <>
            {tab.map((id) => (
                (id < number) ?
                    <img key={id} src= {starActive} id="stars__active" alt="notation du logement"/> :
                    <img key={id} src= {starInactive} id="stars__active" alt="notation du logement"/>
                ))}
        </>
        
    )
}

export default Rating
