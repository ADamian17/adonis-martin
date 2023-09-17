import React from 'react'

import Input from './Input/Input'

import styles from './Form.module.scss'
import Textarea from './Textarea';
import Submit from './Submit';

const Form = ({ children, className, ...rest }: FormComponents.Form) => (
  <form
    className={`${styles.form} ${className}`}
    {...rest}
  >
    {children}
  </form>
)

Form.Input = Input;
Form.Textarea = Textarea;
Form.Submit = Submit;

export default Form;
