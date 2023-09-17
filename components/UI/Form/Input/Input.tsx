import React from 'react';

import FieldWrapper from '../FieldWrapper';

import styles from "./Input.module.scss";

const Input: React.FC<FormComponents.Input> = ({ error, ...rest }) => (
  <FieldWrapper error={error}>
    <input
      className={styles.input}
      type="text"
      {...rest}
    />
  </FieldWrapper>
)

export default Input;
