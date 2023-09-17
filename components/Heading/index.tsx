import React from 'react';

import styles from "./Heading.module.scss";

type HeadingSizeType = "m" | "l" | "xl";

type HeadingType = {
  copy: string;
  size?: HeadingSizeType
  className?: string;
}

const Heading: React.FC<HeadingType> = ({ copy, size = 'm', className }) => {
  const sizeOpt: Record<HeadingSizeType, string> = {
    l: styles.l,
    m: styles.m,
    xl: styles.xl,
  }

  return (
    <h2 className={`${styles.heading} ${sizeOpt[size]} ${className}`}>{copy}</h2>
  )
}

export default Heading;