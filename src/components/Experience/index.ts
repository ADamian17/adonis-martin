import { Builder } from '@builder.io/react'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { Experience } from './Experience'

export const registerExperience = () => {
  Builder.registerComponent(Experience, {
    name: 'Experience',
    inputs: [
      {
        name: 'headline',
        type: 'text',
        defaultValue: '',
      },
      {
        name: 'copy',
        type: 'text',
        defaultValue: '',
      },
      {
        name: 'experienceItems',
        type: 'list',
        subFields: [
          { name: 'experienceItem', type: 'reference', model: BUILDER_IO_MODELS.EXPERIENCE_ITEM },
        ],
      },
    ],
    models: [BUILDER_IO_MODELS.PAGE],
  })
}
