import React from 'react';

import styles from "./Submit.module.scss";

const Submit: React.FC<FormComponents.Input> = ({ ...rest }) => (
  <input
    className={styles.submitBtn}
    type="submit"
    {...rest}
  />
)

export default Submit;
