export type StackCategory = {
  category: string
  items: string[]
}

export interface TechItemType {
  id: string
  value: {
    data: {
      category: string
      items?: { item: string }[]
    }
  }
}

export type TechItemsType = Record<'techItem', TechItemType>[]
