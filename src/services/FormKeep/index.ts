export type FormKeepData = {
  email: string
  message: string
  name: string
  subject: string
}

export const submitToFormKeep = async (data: FormKeepData) => {
  const response = await fetch(import.meta.env.VITE_FORMKEEP_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: data.email.trim(),
      message: data.message.trim(),
      name: data.name.trim(),
      subject: data.subject.trim(),
    }),
  })

  if (!response.ok) throw new Error(`FormKeep responded with ${response.status}`);

  return response.json()
}
