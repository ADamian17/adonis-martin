import React from "react";

import styles from "./Headline.module.scss"

export type HeadlineType = {
  text: string,
  className?: string;
};

const Headline: React.FC<HeadlineType> = ({ className, text }) => {
  return (
    <h2 className={`${styles.headline} ${className}`}>{text}</h2>
  )
}

export default Headline;