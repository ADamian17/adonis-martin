import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'
import type { BlogPostQuery, BlogPostQueryVariables } from '@/.gql/graphql'
import { graphqlClient } from '@/config/graphql-request'
import { ITEMS_PER_PAGE } from '@/services/builderIO/fetchContent'
import {
  POST_CATEGORIES_QUERY,
  POST_CATEGORIES_QUERY_KEY,
  POSTS_QUERY,
  POSTS_QUERY_KEY,
} from './PostsSection.query'

export const ALL_CATEGORIES = 'All'

/**
 * Faint grid texture the design lays over every gradient cover. Sized per
 * surface: 64px 128px on the featured hero, 48px 96px on the smaller cards.
 * Only used with gradients — an image cover is shown plain, as the post page does.
 */
export const gridOverlay = (size: string) =>
  `url('/images/hero-grid.png') top left / ${size} repeat`

/**
 * A `post-category` resolved onto a post by `options: { includeRefs: true }`.
 *
 * Builder exposes reference fields as an untyped JSON scalar, so codegen emits
 * `unknown`. This is the one place that shape is asserted.
 */
type CategoryReference = {
  id?: string | null
  value?: { data?: { category?: string | null } | null } | null
}

const toCategoryReference = (category: unknown) => category as CategoryReference | null

/** Label to print on a card, empty when the post has no category picked. */
export const getCategoryLabel = (category: unknown) =>
  toCategoryReference(category)?.value?.data?.category ?? ''

export type PostCategory = { id: string; label: string }

/**
 * Filter options, read from the `post-category` model rather than from the
 * posts on screen.
 *
 * Deriving them from the listing collapsed the bar to whichever category was
 * selected — and since the bar is what clears the filter, that left no way back
 * to "All". Reading the model also means the list is complete no matter how far
 * the listing has paged.
 */
export const getPostCategories = () =>
  queryOptions({
    queryKey: [POST_CATEGORIES_QUERY_KEY],
    queryFn: () => graphqlClient.request(POST_CATEGORIES_QUERY, { limit: 100 }),
    select: (data): PostCategory[] =>
      (data.postCategory ?? [])
        .map((entry) => ({ id: entry?.id ?? '', label: entry?.data?.category ?? '' }))
        .filter((category) => category.id !== '' && category.label !== ''),
  })

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

export type BlogPostData = NonNullable<
  NonNullable<NonNullable<BlogPostQuery['blogPost']>[number]>['data']
>
