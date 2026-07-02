import { Builder } from '@builder.io/react'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { ContactInfo } from '@/features/contact/components/ContactInfo'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const ContactGrid = () => (
  <section
    className="grid items-start gap-[30px]"
    style={{
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      padding: '50px clamp(20px, 8.4vw, 162px) 80px',
      maxWidth: '1920px',
      marginInline: 'auto',
    }}
  >
    <div className="rounded-xl bg-card-warm" style={{ padding: '50px' }}>
      <h2 className="m-0 mb-[22px] font-semibold text-[26px] text-heading">Send a message</h2>
      <ContactForm />
    </div>

    <ContactInfo />
  </section>
)

export const registerContactGrid = () => {
  Builder.registerComponent(ContactGrid, {
    name: 'ContactGrid',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
