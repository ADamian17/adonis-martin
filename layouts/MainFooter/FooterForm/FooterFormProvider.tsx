import React, { createContext, useContext, useState } from 'react';

type FooterFormContextType = {
  email: string;
  emailError: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  name: string;
}

type FooterFormProviderType = {
  children: React.ReactNode
}

const FooterFormCtx = createContext<FooterFormContextType>({} as FooterFormContextType)
export const useFooterFormCtx = () => useContext(FooterFormCtx)

export const FooterFormProvider: React.FC<FooterFormProviderType> = ({ children }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const defaultEmailMsg = "Email is not valid"
  const emptyMsg = "This field is required"
  const [emailErrorMsg, setEmailErrorMsg] = useState(defaultEmailMsg)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("https://formkeep.com/f/8e6292454fc8", {
        method: "POST",
        headers: {
          'Content-Type': "multipart/form-data"
        },
        body: JSON.stringify({
          name,
          email
        })
      })

      setEmail("")
      setName("")
    } catch (error) {
      console.log({ error });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const validateEmail = (email: string): boolean => {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(email)
  }

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 0) return;

    const isValid = validateEmail(e.target.value)

    if (!isValid) {
      setEmailError(true)
    }
  }

  const handleEmailFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (emailError) setEmailError(false)

    setEmail(e.target.value)
  }

  const value = {
    email,
    emailError,
    handleChange,
    handleEmailBlur,
    handleEmailChange,
    handleEmailFocus,
    handleSubmit,
    name
  }

  return (
    <FooterFormCtx.Provider value={value}>
      {children}
    </FooterFormCtx.Provider>
  )
}