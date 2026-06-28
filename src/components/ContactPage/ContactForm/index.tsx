import { useState } from 'react'
import { FieldError, Input, Label, TextArea, TextField } from 'react-aria-components'

import { SuccessState } from './SuccessState'

type FormState = {
  email: string
  message: string
  name: string
  subject: string
}

const emptyForm: FormState = { email: '', message: '', name: '', subject: '' }
const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

const labelClass = 'font-medium text-[15px] text-heading'
const errClass = 'text-[14px] text-[#c0392b]'
const fieldClass =
  'w-full py-[16px] px-[18px] rounded-lg border border-[#e4e0d8] bg-white font-[Manrope] text-[16px] text-heading outline-none placeholder:text-[#a8a39a] focus:border-accent transition-colors'

export const ContactForm = () => {
  const [form, setForm] = useState(emptyForm)
  const [touched, setTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sentInfo, setSentInfo] = useState({ email: '', name: '' })

  const set = (key: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [key]: v }))

  const emailValid = emailRe.test(form.email.trim())
  const nameErr = touched && !form.name.trim()
  const emailErr = touched && !emailValid
  const messageErr = touched && !form.message.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTouched(true)
    if (!form.name.trim() || !emailValid || !form.message.trim()) return
    setSentInfo({ email: form.email.trim(), name: form.name.trim().split(' ')[0] })
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(emptyForm)
    setTouched(false)
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <SuccessState sentName={sentInfo.name} sentEmail={sentInfo.email} onReset={handleReset} />
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-[22px]">
      <TextField
        value={form.name}
        onChange={set('name')}
        isInvalid={nameErr}
        className="flex flex-col gap-2"
      >
        <Label className={labelClass}>Name</Label>
        <Input placeholder="Your full name" className={fieldClass} />
        <FieldError className={errClass}>Please enter your name.</FieldError>
      </TextField>

      <TextField
        value={form.email}
        onChange={set('email')}
        isInvalid={emailErr}
        className="flex flex-col gap-2"
      >
        <Label className={labelClass}>Email</Label>
        <Input type="email" placeholder="you@company.com" className={fieldClass} />
        <FieldError className={errClass}>Please enter a valid email address.</FieldError>
      </TextField>

      <TextField value={form.subject} onChange={set('subject')} className="flex flex-col gap-2">
        <Label className={labelClass}>Subject</Label>
        <Input placeholder="What's this about?" className={fieldClass} />
      </TextField>

      <TextField
        value={form.message}
        onChange={set('message')}
        isInvalid={messageErr}
        className="flex flex-col gap-2"
      >
        <Label className={labelClass}>Message</Label>
        <TextArea
          rows={5}
          placeholder="Tell me about your project, timeline, and goals…"
          className={`${fieldClass} resize-vertical`}
        />
        <FieldError className={errClass}>Please add a short message.</FieldError>
      </TextField>

      <button
        type="submit"
        className="cursor-pointer self-start flex items-center gap-[10px] px-7 py-[18px] rounded-lg border-none bg-accent text-card-cream font-medium text-[18px] hover:bg-accent/90 transition-colors"
      >
        Send Message
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fcfbf8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
        </svg>
      </button>
    </form>
  )
}
