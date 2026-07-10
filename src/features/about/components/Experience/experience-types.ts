export interface ExperienceItemType {
  id: string
  value: {
    data: {
      title: string
      company: string
      description: string
      startDate: string
      endDate?: string
      isCurrentCompany: boolean
      employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Freelance' | 'Other'
    }
  }
}

export type ExperienceItemsType = Record<'experienceItem', ExperienceItemType>[]
