import { Builder } from '@builder.io/react'

import { skills } from '@/data/skills'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SkillCard } from './SkillCard'

export const SkillsGrid = () => (
  <section id="about" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <div
      className="flex flex-col items-center text-center mb-[60px]"
      style={{ maxWidth: 640, margin: '0 auto 60px' }}
    >
      <h2
        className="font-semibold text-heading mb-4"
        style={{ fontSize: 'clamp(34px, 3.4vw, 48px)' }}
      >
        Creative Skills
      </h2>
      <p className="text-body text-[18px] leading-[1.55]">
        A focused toolkit for building fast, reliable, accessible frontends.
      </p>
    </div>

    <div
      className="grid gap-[30px]"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.title} skill={skill} />
      ))}
    </div>
  </section>
)

export const registerSkillsGrid = () => {
  Builder.registerComponent(SkillsGrid, {
    name: 'SkillsGrid',
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
