

const Banner = (props) => (
    <>
        <img 
            src= {props.image} 
            alt = {props.alt}
        />
        <h1>{props.text}</h1>
    </>
)

export default Banner
