import { graphql } from '@/.gql'

export const POSTS_QUERY_KEY = 'posts'

export const POSTS_QUERY = graphql(`
  query BlogPost ($offset: Int = 0, $limit: Int = 20) {
    blogPost(offset: $offset, limit: $limit) {
      data {
        title
        excerpt
        category
        publishedDate
        readMinutes
        coverGradient
        featured
        url
      }
    }
  }
`)
