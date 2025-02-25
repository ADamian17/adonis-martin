import React from 'react'

import { useFooterFormCtx } from './FooterFormProvider';
import Form from '@/components/UI/Form';

import styles from "./FooterForm.module.scss";

const FooterFrom: React.FC = (props) => {
  const {
    email,
    emailError,
    handleChange,
    handleEmailBlur,
    handleEmailChange,
    handleEmailFocus,
    handleMessageChange,
    handleSubmit,
    message,
    name,
  } = useFooterFormCtx();

  return (
    <Form
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
        onChange={handleMessageChange}
        value={message}
        cols={30}
        name="message"
        placeholder='Message'
        rows={4}
      />

      <Form.Submit value="send message" />
    </Form>
  )
}

export default FooterFrom;
