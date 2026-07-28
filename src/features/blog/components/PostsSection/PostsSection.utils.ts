import { infiniteQueryOptions } from '@tanstack/react-query'
import type { BlogPostQuery, BlogPostQueryVariables } from '@/.gql/graphql'
import { graphqlClient } from '@/config/graphql-request'
import { ITEMS_PER_PAGE } from '@/services/builderIO/fetchContent'
import { POSTS_QUERY, POSTS_QUERY_KEY } from './PostsSection.query'

export const ALL_CATEGORIES = 'All'

export const getCategories = (
  posts: NonNullable<NonNullable<NonNullable<BlogPostQuery['blogPost']>[number]>['data']>[],
) => [ALL_CATEGORIES, ...new Set(posts.filter((post) => post != null).map((post) => post.category))]

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

  return infiniteQueryOptions({
    initialPageParam: {
      limit: ITEMS_PER_PAGE,
      offset: 0,
      ...dynamicVariables,
    },
    queryKey: [POSTS_QUERY_KEY, dynamicVariables],
    queryFn: async ({ pageParam }) => {
      const apiKey = import.meta.env.VITE_BUILDER_API_KEY

      if (!apiKey) {
        throw new Error('Builder.io API key is not configured')
      }

      return await graphqlClient.request(POSTS_QUERY, pageParam)
    },
    getNextPageParam: (lastPage, allPages) => {
      // If last page has fewer results than ITEMS_PER_PAGE, there are no more pages
      if (!lastPage?.blogPost?.length || lastPage.blogPost.length < ITEMS_PER_PAGE) {
        return undefined
      }

      // Offset is how many posts are already loaded, so the reduce is the count
      // itself — multiplying it by the page size again would skip past them.
      return {
        limit: ITEMS_PER_PAGE,
        offset: allPages.reduce((acc, page) => acc + (page?.blogPost?.length ?? 0), 0),
        ...dynamicVariables,
      }
    },
    select: (data) =>
      data?.pages
        .flatMap((page) => page?.blogPost ?? [])
        .map((item) => item?.data)
        .filter((post): post is NonNullable<typeof post> => post != null),
  })
}
