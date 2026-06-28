import { ContactForm } from '@/components/ContactPage/ContactForm'
import { ContactInfo } from '@/components/ContactPage/ContactInfo'

export const ContactPage = () => (
  <>
    {/* Centered header */}
    <section
      className="text-center"
      style={{
        padding: '80px clamp(20px, 8.4vw, 162px) 20px',
        maxWidth: '1920px',
        marginInline: 'auto',
      }}
    >
      <div
        className="inline-block px-[18px] py-[10px] rounded-[13px] bg-white font-medium text-[18px] text-accent mb-6"
        style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
      >
        Contact Me
      </div>
      <h1
        className="m-0 mx-auto mb-4 font-semibold text-heading leading-[1.16]"
        style={{ fontSize: 'clamp(38px, 3.8vw, 54px)', maxWidth: '18ch' }}
      >
        Let&apos;s build something great together
      </h1>
      <p
        className="m-0 mx-auto font-normal text-[18px] leading-[1.6] text-body"
        style={{ maxWidth: '58ch' }}
      >
        Have a project, a role, or just a question? Tell me a bit about it and I&apos;ll get back
        to you within one business day.
      </p>
    </section>

    {/* Form + info grid */}
    <section
      className="grid items-start gap-[30px]"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        padding: '50px clamp(20px, 8.4vw, 162px) 80px',
        maxWidth: '1920px',
        marginInline: 'auto',
      }}
    >
      {/* Form card */}
      <div className="rounded-xl bg-card-warm" style={{ padding: '50px' }}>
        <h2 className="m-0 mb-[22px] font-semibold text-[26px] text-heading">Send a message</h2>
        <ContactForm />
      </div>

      {/* Info column */}
      <ContactInfo />
    </section>
  </>
)
