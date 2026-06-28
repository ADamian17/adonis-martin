import { builder } from '@builder.io/react'
import type { BuilderIOModel } from './models'

export const fetchContent = async (model: BuilderIOModel, urlPath: string) => {
  try {
    return await builder.get(model, { userAttributes: { urlPath } }).promise()
  } catch (error) {
    console.error(`Error fetching ${model} content for ${urlPath}`, error)

    return null
  }
}
