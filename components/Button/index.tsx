import React from 'react'
import Link from 'next/link';

import styles from "./Button.module.scss";

type ButtonType = {
  path: string,
  label: string
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>["target"]
}

const Button: React.FC<ButtonType> = ({ path, label, target }) => {
  return (
    <Link
      role="button"
      href={path}
      className={styles.button}
      target={target}>
      {label}
    </Link>
  )
}

export default Button;