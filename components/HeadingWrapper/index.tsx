import React from "react";

import styles from "./HeadingWrapper.module.scss"

export type HeadingWrapperType = {
  copy: string
  variant: "light" | "dark"
  headingType?: "h2" | "h3" | "h4"
  className?: string;
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const HeadingWrapper: React.FC<HeadingWrapperType> = ({ copy, variant, headingType, className, ...rest }) => {
  const colorVariant = {
    dark: styles.headingDark,
    light: styles.headingLight
  }

  const headingVariant = {
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
  }

  const headingStyles = `${styles.heading} ${headingType && headingVariant[headingType]} ${colorVariant[variant]}`

  return (
    <section className={`${styles.headingWrapper} ${className}`}>
      <h2 className={headingStyles} {...rest} dangerouslySetInnerHTML={{ __html: copy }} />
    </section>
  )
}

export default HeadingWrapper;