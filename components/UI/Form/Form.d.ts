declare namespace FormComponents {
  type Form = {
    children: React.ReactNode;
    className?: string;
  } & React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;

  type FieldWrapper = {
    children: JSX.Element;
    error?: boolean;
    withErrorIcon?: boolean;
  };

  type Input = {
    error?: boolean;
  } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  type Textarea = {
    error?: boolean;
  } & React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}
