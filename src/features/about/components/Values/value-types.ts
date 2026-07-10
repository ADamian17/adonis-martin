export type ValueIcon = 'target' | 'zap' | 'message'

export type ValueItem = {
  title: string
  description: string
  icon: ValueIcon
}

export interface ValueItemType {
  id: string
  value: {
    data: ValueItem
  }
}

export type ValueItemsType = Record<'valueItem', ValueItemType>[]
