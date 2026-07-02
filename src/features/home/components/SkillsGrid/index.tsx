import { Builder } from '@builder.io/react'

import { skills } from '@/data/skills'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'
import { SkillCard } from './SkillCard'

export const SkillsGrid = () => (
  <section id="about" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
    <SectionHeading
      align="center"
      title="Creative Skills"
      description="A focused toolkit for building fast, reliable, accessible frontends."
    />

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
