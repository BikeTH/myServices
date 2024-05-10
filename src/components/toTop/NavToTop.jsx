import React, { useState, useEffect } from 'react';
import './toTop.css';
import { MdOutlineVerticalAlignTop } from 'react-icons/md';

export default function NavToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {isVisible && (
        <div id="topBtn" onClick={scrollToTop}>
          <MdOutlineVerticalAlignTop alt="Scroll to Top" />
        </div>
      )}
    </>
  );
}
