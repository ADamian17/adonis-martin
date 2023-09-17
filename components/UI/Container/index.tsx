import React from 'react';

import styles from "./Container.module.scss";

type ContainerType = {
  className?: string;
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLElement>,
  HTMLElement
>

type ContentType = {
  className?: string;
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.AllHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const Container = ({ className, children, ...rest }: ContainerType) => (
  <section className={`${styles.container} ${className}`} {...rest}>
    {children}
  </section>
)

const FullWidth: React.FC<ContentType> = ({ className, children, ...rest }) => (
  <div className={`${styles.fullWidth} ${className}`} {...rest}>
    {children}
  </div>
)

const Centered: React.FC<ContentType> = ({ className, children, ...rest }) => (
  <div className={`${styles.centered} ${className}`} {...rest}>
    {children}
  </div>
)

Container.FullWidth = FullWidth
Container.Centered = Centered

export default Container;
