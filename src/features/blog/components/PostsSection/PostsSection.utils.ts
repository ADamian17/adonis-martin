import { queryOptions } from '@tanstack/react-query'
import type { BlogPostQueryVariables } from '@/.gql/graphql'
import { graphqlClient } from '@/config/graphql-request'
import { POSTS_QUERY, POSTS_QUERY_KEY } from './PostsSection.query'

export const ALL_CATEGORIES = 'All'

/**
 * Fetch ceiling for the listing.
 *
 * Deliberately not paged, unlike margot-site's property grid: the category
 * filter runs client-side, so paging would filter only the posts loaded so far
 * and quietly hide the rest. Fetching the set whole also puts every post in the
 * prerendered HTML, which is the point of a blog index.
 */
export const getBlogPosts = (externalQuery: Pick<BlogPostQueryVariables, 'query'>) => {
  const dynamicVariables = {
    ...(externalQuery?.query ? { query: externalQuery?.query } : {}),
  } satisfies BlogPostQueryVariables

  return queryOptions({
    queryKey: [POSTS_QUERY_KEY, dynamicVariables],
    queryFn: () => graphqlClient.request(POSTS_QUERY, dynamicVariables),
    select: (data) =>
      (data.blogPost ?? [])
        .map((entry) => entry?.data)
        .filter((entry) => entry != null)
        .map((entry) => ({
          title: entry.title ?? '',
          excerpt: entry.excerpt ?? '',
          category: entry.category ?? '',
          publishedDate: entry.publishedDate ?? '',
          readMinutes: entry.readMinutes ?? 0,
          coverGradient: entry.coverGradient ?? 'linear-gradient(90deg, #FF7A00 0%, #FFB800 100%)',
          featured: entry.featured ?? false,
          url: entry.url ?? '',
        })),
  })
}
