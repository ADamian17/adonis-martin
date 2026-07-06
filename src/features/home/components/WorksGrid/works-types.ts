export interface ProjectItemType {
  id: string
  value: {
    data: {
      title: string
      description: string
      category: string
      tags?: { tag: string }[]
      image?: string
      url: string
      thumbnails?: { thumbnail: string }[]
    }
  }
}

export type ProjectItemsType = Record<'project', ProjectItemType>[]
