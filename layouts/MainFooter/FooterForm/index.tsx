import React from 'react'

import { FooterFormProvider, useFooterFormCtx } from './FooterFormProvider';

import styles from "./FooterForm.module.scss";
import Form from '@/components/UI/Form';

const FooterFrom: React.FC = (props) => {
  const {
    email,
    emailError,
    handleChange,
    handleEmailBlur,
    handleEmailChange,
    handleEmailFocus,
    handleSubmit,
    name,
  } = useFooterFormCtx();

  return (
    <Form
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      className={styles.footerForm}
    >

      <Form.Input
        onChange={handleChange}
        placeholder='Name'
        value={name}
      />

      <Form.Input
        error={emailError}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        placeholder='Email'
        value={email}
        onFocus={handleEmailFocus}
      />

      <Form.Textarea
        cols={30}
        id=""
        name=""
        placeholder='Message'
        rows={4}
      />

      <Form.Submit value="send message" />
    </Form>
  )
}

export default FooterFrom;
