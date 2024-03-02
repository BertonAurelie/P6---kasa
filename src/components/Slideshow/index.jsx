import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);
  const item = props.item;

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(item.pictures.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  const slideRight = () => {
    setIndex((index + 1) % item.pictures.length);
  };

  const oneImg = item.pictures.length > 1;

  return (
    <>
      {oneImg ? (
        <>
          <button className ="carousel__button--left" onClick={slideLeft}><IoIosArrowBack /></button>
            <div className ="carousel__img" key={index}>
              <img src={item.pictures[index]} alt={index} />
              <div className = "carousel__img-index">{index + 1} / {item.pictures.length}</div>
            </div>
          <button className ="carousel__button--righ" onClick={slideRight}><IoIosArrowForward /></button>
       
        </>
      ) : (
        <div className ="carousel__img" key={index}>
          <img src={item.pictures[index]} alt={index} />
        </div>
      )}
    </>
 );
};

export default Carousel;
