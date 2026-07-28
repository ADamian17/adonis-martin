import { Builder } from '@builder.io/react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { FilterBar } from '@/ui/FilterBar'
import { Section } from '@/ui/Section'
import { PostCardGrid } from './PostCardGrid'
import { ALL_CATEGORIES, getBlogPosts, getCategories } from './PostsSection.utils'
import { PostsSectionEmpty } from './PostsSectionEmpty'
import { PostsSectionPending } from './PostsSectionPending'

const PostsSection = () => {
  const [query, setQuery] = useState<Record<string | 'data.category', string>>({})
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery(getBlogPosts({ query }))

  const categories = useMemo(() => getCategories(posts ?? []), [posts])

  if (isPending) return <PostsSectionPending />

  if (!posts?.length) {
    return (
      <Section py="pt-5 pb-10">
        <PostsSectionEmpty message="No posts published yet — check back soon." />
      </Section>
    )
  }

  const handleCategoryChange = (category: string | null) => {
    setQuery((prev) => {
      if (category === ALL_CATEGORIES) return {}

      return { ...prev, 'data.category': category }
    })
  }

  return (
    <>
      <Section py="pt-4 pb-0">
        <FilterBar
          categories={categories}
          activeCategory={query['data.category'] ?? ALL_CATEGORIES}
          onCategoryChange={handleCategoryChange}
        />
      </Section>

      <PostCardGrid
        category={query['data.category']}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        posts={posts}
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
