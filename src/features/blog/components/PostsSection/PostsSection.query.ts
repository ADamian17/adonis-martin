import { graphql } from '@/.gql'

export const POSTS_QUERY_KEY = 'posts'
export const POST_CATEGORIES_QUERY_KEY = 'post-categories'

export const POST_CATEGORIES_QUERY = graphql(`
  query PostCategory($limit: Int = 100) {
    postCategory(limit: $limit) {
      id
      data {
        category
      }
    }
  }
`)

export const POSTS_QUERY = graphql(`
  query BlogPost($offset: Int = 0, $limit: Int = 20, $query: JSONObject, $sort: JSONObject) {
    blogPost(
      offset: $offset
      limit: $limit
      query: $query
      sort: $sort
      options: { includeRefs: true }
    ) {
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
