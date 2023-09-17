import React from 'react';

import styles from "./FieldWrapper.module.scss";

const FieldWrapper: React.FC<FormComponents.FieldWrapper> = ({ children, error, withErrorIcon = true }) => (
  <div className={`${styles.fieldWrapper} ${error && styles.hasError}`}>
    {children}

    {error && (
      <>
        {
          withErrorIcon && (
            <svg className={styles.inputErrorIcon}>
              <use href="/icons/error-icon.svg#icon"></use>
            </svg>
          )
        }
        <p className={styles.inputErrorMsg}>This field is required</p>
      </>
    )}
  </div>
)

export default FieldWrapper;
