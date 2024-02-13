import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";

const Carousel = ({data}) => {
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const item = data.filter((item) => item.title === id)[0];

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(item.pictures.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  const slideRight = () => {
    setIndex((index + 1) % item.pictures.length); // increases index by 1
  };

  return (
    <div className="carousel">
      <div className ="carousel__content">
        <button className ="carousel__button--left" onClick={slideLeft}><IoIosArrowBack /></button>
        {
          <div className ="carousel__img" key={index}>
            <img src={item.pictures[index]} alt={index} />
          </div>
        }
        
        <button className ="carousel__button--righ" onClick={slideRight}><IoIosArrowForward /></button>
      </div>
    </div>
 );
};

export default Carousel;
