/** A portfolio project after a Builder `project` reference is flattened for rendering. */
export type Project = {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  url: string
  thumbnails: string[]
}

/** Raw shape of a resolved Builder `project` reference (list subfields stay object-wrapped). */
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
