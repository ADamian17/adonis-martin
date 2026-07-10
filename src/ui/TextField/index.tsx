import clsx from 'clsx'
import {
  TextField as AriaTextField,
  FieldError,
  Input,
  Label,
  TextArea,
} from 'react-aria-components'

type Props = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: 'text' | 'email'
  multiline?: boolean
  rows?: number
  isInvalid?: boolean
  errorMessage?: string
}

const fieldClass =
  'w-full py-[16px] px-[18px] rounded-lg border border-border-warm bg-white font-[Manrope] text-[16px] text-heading outline-none placeholder:text-placeholder transition-colors data-[focused]:border-accent data-[invalid]:border-danger'

/** Labeled form field; owns the input border/focus/placeholder theming for the whole app. */
export const TextField = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  multiline = false,
  rows = 5,
  isInvalid = false,
  errorMessage,
}: Props) => (
  <AriaTextField
    value={value}
    onChange={onChange}
    isInvalid={isInvalid}
    className="flex flex-col gap-2"
  >
    <Label className="font-medium text-[15px] text-heading">{label}</Label>
    {multiline ? (
      <TextArea
        rows={rows}
        placeholder={placeholder}
        className={clsx(fieldClass, 'resize-vertical')}
      />
    ) : (
      <Input type={type} placeholder={placeholder} className={fieldClass} />
    )}
    {errorMessage && <FieldError className="text-[14px] text-danger">{errorMessage}</FieldError>}
  </AriaTextField>
)
