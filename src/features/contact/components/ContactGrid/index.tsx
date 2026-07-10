import { Builder } from '@builder.io/react'
import { ContactForm } from '@/features/contact/components/ContactForm'
import { ContactInfo } from '@/features/contact/components/ContactInfo'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Section } from '@/ui/Section'

type Props = {
  availabilityStatus: string
  availabilitySubtext: string
  withAvailabilityStatus: boolean
}

export const ContactGrid = ({
  availabilityStatus,
  availabilitySubtext,
  withAvailabilityStatus,
}: Props) => (
  <Section
    py="pt-12.5 pb-20"
    className="grid items-start gap-7.5 grid-cols-[repeat(auto-fit,minmax(340px,1fr))]"
  >
    <div className="rounded-xl bg-card-warm" style={{ padding: '50px' }}>
      <h2 className="m-0 mb-5.5 font-semibold text-[26px] text-heading">Send a message</h2>
      <ContactForm />
    </div>

    <ContactInfo
      availabilityStatus={availabilityStatus}
      availabilitySubtext={availabilitySubtext}
      withAvailabilityStatus={withAvailabilityStatus}
    />
  </Section>
)

export const registerContactGrid = () => {
  Builder.registerComponent(ContactGrid, {
    name: 'ContactGrid',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [
      {
        name: 'withAvailabilityStatus',
        type: 'boolean',
        defaultValue: false,
      },
      {
        name: 'availabilityStatus',
        type: 'text',
        defaultValue: 'Currently available for new projects',
        showIf: (options) => options.get('withAvailabilityStatus'),
      },
      {
        name: 'availabilitySubtext',
        type: 'text',
        defaultValue: 'Booking work starting July 2026',
        showIf: (options) => options.get('withAvailabilityStatus'),
      },
    ],
  })
}
