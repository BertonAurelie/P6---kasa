import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";

const Carousel = ({data}) => {
  const [index, setIndex] = useState(0);
  const images = [index].pictures
  const { id } = useParams();

  const slideLeft = (images) => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  const slideRight = (images) => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  return (
    <div className="carousel">
      <div className ="carousel__content">
        <button className ="carousel__button--left" onClick={slideLeft}><IoIosArrowBack /></button>
        {data
          .filter((item) => item.title === id)
          .map((item, index) => (
            <div className ="carousel__img" key={index}>
              <img src={item.pictures[index]} alt={index} />
            </div>
        ))}
        
        <button className ="carousel__button--righ" onClick={slideRight}><IoIosArrowForward /></button>
      </div>
    </div>
 );
};

export default Carousel;
