import React, {useState} from 'react'
import arrowOnPageAbout from '../../assets/arrowOnPageAbout.svg'
import './Collapse.scss'

function Collapse(props){
    const [isVisible, setisVisible] = useState(false)
    
    return(
        <div className="about-section">
            <article>
                <section className="about-section__display">
                    <h2 className="about-section__title">{props.title}</h2>
                    <button  className={isVisible ? 'about-section__button_active' : 'about-section__button'} type="button" onClick={(target) => (setisVisible(!isVisible)) }>
                        <img src={arrowOnPageAbout} alt=""/> 
                    </button>
                </section>
                {isVisible && (
                    <section className="about-section__hidden" >
                        <p>{props.paragraph}</p>
                    </section>
                )}
            </article>
        </div>
    )
}
export default Collapse
