import React from "react";

import styles from "./RingsFigure.module.scss"

export type RingsFigureType = {
  className?: string;
};

const RingsFigure: React.FC<RingsFigureType> = ({ className }) => {
  return (
    <svg className={`${styles.rings} ${className}`}>
      <use href='/icons/pattern-rings.svg#icon'></use>
    </svg>
  )
}

export default RingsFigure;