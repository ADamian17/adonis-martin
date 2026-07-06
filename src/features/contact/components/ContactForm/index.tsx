import { Builder } from '@builder.io/react'
import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Button } from '@/ui/Button'
import { TextField } from '@/ui/TextField'
import { validateEmail } from '@/utils/validateEmail'
import { SuccessState } from './SuccessState'

type FormState = {
  email: string
  message: string
  name: string
  subject: string
}

const emptyForm: FormState = { email: '', message: '', name: '', subject: '' }
const formkeepUrl = import.meta.env.VITE_FORMKEEP_URL ?? ''

const required =
  (message: string) =>
  ({ value }: { value: string }) =>
    value.trim() ? undefined : message

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [sentInfo, setSentInfo] = useState({ email: '', name: '' })
  const [submitError, setSubmitError] = useState('')

  const { mutateAsync } = useMutation({
    mutationFn: async (value: {
      email: string
      message: string
      name: string
      subject: string
    }) => {
      const response = await fetch(formkeepUrl, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: value.email.trim(),
          message: value.message.trim(),
          name: value.name.trim(),
          subject: value.subject.trim(),
        }),
      })

      return response.json()
    },
    onError: () => {
      setSubmitError(
        'Something went wrong sending your message. Please try again, or email me directly.',
      )
    },
    onSuccess: (_, variables) => {
      setSentInfo({ email: variables.email.trim(), name: variables.name.trim().split(' ')[0] })
      setSubmitError('')
      setSubmitted(true)
    },
  })

  const { Subscribe, handleSubmit, Field } = useForm({
    defaultValues: emptyForm,
    onSubmit: async ({ value, formApi }) => {
      setSubmitError('')

      await mutateAsync(value)

      formApi.reset()
    },
  })

  const handleReset = () => {
    setSubmitted(false)
    setSubmitError('')
  }

  if (submitted) {
    return (
      <SuccessState sentName={sentInfo.name} sentEmail={sentInfo.email} onReset={handleReset} />
    )
  }

  return (
    <form
      noValidate
      className="flex flex-col gap-5.5"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <Field
        name="name"
        validators={{
          onChange: required('Please enter your name.'),
          onSubmit: required('Please enter your name.'),
        }}
      >
        {(field) => (
          <TextField
            label="Name*"
            value={field.state.value}
            onChange={field.handleChange}
            placeholder="Your full name"
            isInvalid={field.state.meta.errors.length > 0}
            errorMessage={field.state.meta.errors[0]}
          />
        )}
      </Field>

      <Field name="email" validators={{ onChange: validateEmail, onSubmit: validateEmail }}>
        {(field) => (
          <TextField
            label="Email*"
            type="email"
            value={field.state.value}
            onChange={field.handleChange}
            placeholder="you@company.com"
            isInvalid={field.state.meta.errors.length > 0}
            errorMessage={field.state.meta.errors[0]}
          />
        )}
      </Field>

      <Field name="subject">
        {(field) => (
          <TextField
            label="Subject"
            value={field.state.value}
            onChange={field.handleChange}
            placeholder="What's this about?"
          />
        )}
      </Field>

      <Field
        name="message"
        validators={{
          onChange: required('Please add a short message.'),
          onSubmit: required('Please add a short message.'),
        }}
      >
        {(field) => (
          <TextField
            label="Message*"
            multiline
            rows={5}
            value={field.state.value}
            onChange={field.handleChange}
            placeholder="Tell me about your project, timeline, and goals…"
            isInvalid={field.state.meta.errors.length > 0}
            errorMessage={field.state.meta.errors[0]}
          />
        )}
      </Field>

      {submitError && (
        <p role="alert" className="m-0 text-[14px] text-danger">
          {submitError}
        </p>
      )}

      <Subscribe selector={(s) => s.isSubmitting}>
        {(isSubmitting) => (
          <Button
            type="submit"
            isLoading={isSubmitting}
            className="self-start gap-2.5 px-7 py-4.5 text-[18px] border-none"
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        )}
      </Subscribe>
    </form>
  )
}

export const registerContactForm = () => {
  Builder.registerComponent(ContactForm, {
    name: 'ContactForm',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
