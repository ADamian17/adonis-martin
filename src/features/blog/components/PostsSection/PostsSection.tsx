import { Builder } from '@builder.io/react'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { FilterBar } from '@/ui/FilterBar'
import { Section } from '@/ui/Section'
import { FeaturedPost, type FeaturedPostReference } from './FeaturedPost'
import { PostCardGrid } from './PostCardGrid'
import { ALL_CATEGORIES, getBlogPosts, getPostCategories } from './PostsSection.utils'
import { PostsSectionPending } from './PostsSectionPending'

type PostsSectionProps = { featuredPost?: FeaturedPostReference }

const PostsSection = ({ featuredPost }: PostsSectionProps) => {
  const [query, setQuery] = useState<Record<string | 'data.category', string>>({})

  /**
   * Keyed on the reference id, not the resolved `value.data.url`: Builder only
   * resolves the reference when the page is fetched with `includeRefs`, so in
   * the visual editor the url is undefined and the post renders twice. The id
   * is on the reference either way.
   */
  const featuredId = featuredPost?.id

  /**
   * The featured post comes back from the query like any other, so exclude it
   * server-side rather than filtering the result: dropping it client-side would
   * leave a page of ITEMS_PER_PAGE rendering one card short.
   */
  const postsQuery = useMemo(
    () => (featuredId ? { ...query, id: { $ne: featuredId } } : query),
    [query, featuredId],
  )

  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery(getBlogPosts({ query: postsQuery }))

  const { data: postCategories = [] } = useQuery(getPostCategories())

  // FilterBar deals in plain labels, shared with the portfolio; the query needs
  // the reference id, so the two are matched up here rather than widening it.
  const categoryLabels = useMemo(
    () => [ALL_CATEGORIES, ...postCategories.map(({ label }) => label)],
    [postCategories],
  )

  const activeLabel =
    postCategories.find(({ id }) => id === query['data.category.id'])?.label ?? ALL_CATEGORIES

  if (isPending) return <PostsSectionPending />

  const handleCategoryChange = (label: string | null) => {
    const selected = postCategories.find((category) => category.label === label)

    setQuery(selected ? { 'data.category.id': selected.id } : {})
  }

  return (
    <>
      {/* Gated on having a real choice, not on the current results: the bar is
          what clears an active filter, so it has to outlive an empty page. */}
      {categoryLabels.length > 1 && (
        <Section py="pt-4 pb-0">
          <FilterBar
            categories={categoryLabels}
            activeCategory={activeLabel}
            onCategoryChange={handleCategoryChange}
          />
        </Section>
      )}

      {featuredPost && <FeaturedPost featuredPost={featuredPost} />}

      <PostCardGrid
        category={query['data.category.id']}
        hasFeaturedPost={Boolean(featuredId)}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        posts={posts ?? []}
      />
    </>
  )
}

export default PostsSection

export const registerPostsSection = () => {
  Builder.registerComponent(PostsSection, {
    name: 'PostsSection',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [{ name: 'featuredPost', type: 'reference', model: BUILDER_IO_MODELS.BLOG_POST }],
  })
}
