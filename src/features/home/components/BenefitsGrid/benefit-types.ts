export type Benefit = {
  title: string
  description: string
}

export interface BenefitItemType {
  id: string
  value: {
    data: Benefit
  }
}

export type BenefitItemsType = Record<'benefit', BenefitItemType>[]
