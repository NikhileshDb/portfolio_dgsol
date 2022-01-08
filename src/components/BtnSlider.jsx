import React from "react";
import classes from  "../css/custom.module.css";
import leftArrow from '../css/icons/left-arrow.svg';
import rightArrow from '../css/icons/right-arrow.svg';




export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `${classes.btn_slide} ${classes.next}`  :  `${classes.btn_slide} ${classes.prev}` }>
      <img src={direction === "prev" ? leftArrow : rightArrow}/>
    </button>
  );
}