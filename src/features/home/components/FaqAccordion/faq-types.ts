export type FaqItem = {
  question: string
  answer: string
}

export interface FaqItemType {
  id: string
  value: {
    data: FaqItem
  }
}

export type FaqItemsType = Record<'faq', FaqItemType>[]
