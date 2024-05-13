import React from 'react';
import { useSwiper } from 'swiper/react';
import "./swipperButton.css"

const scrollToTop = () => {
  document.body.scrollTop = 500;
  document.documentElement.scrollTop = 500;
};

export function SwiperNavNext(){
  const swiper = useSwiper();

  const handleNextClick = () =>{
    swiper.slideNext();
    scrollToTop();
  };

  return (
    <div className="next-btns">
      <button className="next-Assign" onClick={handleNextClick}>Assignment Aid &gt;&gt;</button>
    </div>
  );
};

export function SwiperNavPrev() {
    const swiper = useSwiper();

    const handlePrevClick = () =>{
      swiper.slidePrev();
      scrollToTop();
    };

    return(
        <div className="prev-btns">
        <button className="prev-Assign" onClick={handlePrevClick}>&lt;&lt; Unit Trust</button>
      </div>
    )
}