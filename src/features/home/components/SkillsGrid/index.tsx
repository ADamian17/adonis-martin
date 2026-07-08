import { Builder } from '@builder.io/react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { SectionHeading } from '@/ui/SectionHeading'
import { SkillCard } from './SkillCard'
import type { Skill, SkillItemsType } from './skill-types'

interface SkillsGridProps {
  headline: string
  subheadline: string
  skillItems: SkillItemsType
}

export const SkillsGrid = ({ headline, subheadline, skillItems = [] }: SkillsGridProps) => {
  const skills: Skill[] = skillItems.map((item) => {
    const data = item.skill?.value?.data

    return {
      title: data?.title ?? '',
      description: data?.description ?? '',
      icon: data?.icon ?? '',
    }
  })

  return (
    <section id="about" style={{ padding: '90px clamp(20px, 8.4vw, 162px)' }}>
      <SectionHeading align="center" title={headline} description={subheadline} />

      <div className="grid gap-7.5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {skills.map((skill) => (
          <SkillCard key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export const registerSkillsGrid = () => {
  Builder.registerComponent(SkillsGrid, {
    name: 'SkillsGrid',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: 'Creative Skills',
      },
      {
        name: 'subheadline',
        type: 'text',
        defaultValue: 'A focused toolkit for building fast, reliable, accessible frontends.',
      },
      {
        name: 'skillItems',
        type: 'list',
        subFields: [{ name: 'skill', type: 'reference', model: BUILDER_IO_MODELS.SKILL_ITEM }],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
