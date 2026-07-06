export type Skill = {
  title: string
  description: string
  icon: string
}

export interface SkillItemType {
  id: string
  value: {
    data: Skill
  }
}

export type SkillItemsType = Record<'skill', SkillItemType>[]
