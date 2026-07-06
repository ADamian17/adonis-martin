import { Builder } from '@builder.io/react'
import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { type FormKeepData, submitToFormKeep } from '@/services/FormKeep'
import { Button } from '@/ui/Button'
import { TextField } from '@/ui/TextField'
import { required, validateEmail } from '@/utils/form-validation'
import { SuccessState } from './SuccessState'

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [sentInfo, setSentInfo] = useState({ email: '', name: '' })
  const [submitError, setSubmitError] = useState('')

  const { mutateAsync } = useMutation({
    mutationFn: async (variables: FormKeepData) => {
      await submitToFormKeep(variables)
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
    defaultValues: { email: '', message: '', name: '', subject: '' },
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
          onChange: ({ value }) => required({ value, message: 'Please enter your name.' }),
          onSubmit: ({ value }) => required({ value, message: 'Please enter your name.' }),
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
            errorMessage={field.state.meta.errors[0] ?? ''}
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
          onChange: ({ value }) => required({ value, message: 'Please add a short message.' }),
          onSubmit: ({ value }) => required({ value, message: 'Please add a short message.' }),
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
