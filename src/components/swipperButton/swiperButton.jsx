import React from 'react';
import { useSwiper } from 'swiper/react';
import "./swipperButton.css"

export function SwiperNavNext(){
  const swiper = useSwiper();

  return (
    <div className="next-btns">
      <button className="next-Assign" onClick={() => swiper.slideNext()}>Assignment Aid &gt;&gt;</button>
    </div>
  );
};

export function SwiperNavPrev() {
    const swiper = useSwiper();

    return(
        <div className="prev-btns">
        <button className="prev-Assign" onClick={() => swiper.slidePrev()}>&lt;&lt; Unit Trust</button>
      </div>
    )
}