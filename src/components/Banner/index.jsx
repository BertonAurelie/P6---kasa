

const Banner = (props) => (
    <>
        <img 
            src= {props.image} 
            alt = {props.alt}
        />
        <p>{props.text}</p>
    </>
)

export default Banner
