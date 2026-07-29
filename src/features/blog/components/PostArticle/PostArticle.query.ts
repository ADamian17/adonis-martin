import { graphql } from '@/.gql'

export const POST_QUERY_KEY = 'post'

/**
 * A single post by its path. Uses `blogPost` with `limit: 1` rather than
 * `oneBlogPost` so the query shape matches the listing, and asks for
 * `includeRefs` so the category reference resolves to its label.
 */
export const POST_QUERY = graphql(`
  query BlogPostByUrl($query: JSONObject) {
    blogPost(limit: 1, query: $query, options: { includeRefs: true }) {
      id
      data {
        title
        excerpt
        category
        publishedDate
        readMinutes
        coverImage
        coverGradient
        body
        authorRole
        authorBio
        url
        tags
      }
    }
  }
`)
