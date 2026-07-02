import { Builder } from '@builder.io/react'
import { useState } from 'react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Button } from '@/ui/Button'
import { TextField } from '@/ui/TextField'

import { SuccessState } from './SuccessState'

type FormState = {
  email: string
  message: string
  name: string
  subject: string
}

const emptyForm: FormState = { email: '', message: '', name: '', subject: '' }
const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

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
        label="Name"
        value={form.name}
        onChange={set('name')}
        placeholder="Your full name"
        isInvalid={nameErr}
        errorMessage="Please enter your name."
      />

      <TextField
        label="Email"
        type="email"
        value={form.email}
        onChange={set('email')}
        placeholder="you@company.com"
        isInvalid={emailErr}
        errorMessage="Please enter a valid email address."
      />

      <TextField
        label="Subject"
        value={form.subject}
        onChange={set('subject')}
        placeholder="What's this about?"
      />

      <TextField
        label="Message"
        multiline
        rows={5}
        value={form.message}
        onChange={set('message')}
        placeholder="Tell me about your project, timeline, and goals…"
        isInvalid={messageErr}
        errorMessage="Please add a short message."
      />

      <Button
        type="submit"
        className="self-start gap-[10px] px-7 py-[18px] text-[18px] border-none"
      >
        Send Message
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-card-cream)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" />
        </svg>
      </Button>
    </form>
  )
}

export const registerContactForm = () => {
  Builder.registerComponent(ContactForm, {
    name: 'ContactForm',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
