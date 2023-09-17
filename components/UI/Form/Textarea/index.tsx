import React from 'react';

import FieldWrapper from '../FieldWrapper';

import styles from './Textarea.module.scss'

const Textarea: React.FC<FormComponents.Textarea> = ({ error, ...rest }) => {
  return (
    <FieldWrapper error={error} withErrorIcon={false}>
      <textarea
        className={`${styles.textArea}`}
        {...rest}
      >
      </textarea>
    </FieldWrapper>
  )
}

export default Textarea;
