import { Builder } from '@builder.io/react'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { BUILDER_IO_MODELS } from '@/services/builderIO/models'
import { FilterBar } from '@/ui/FilterBar'
import { Section } from '@/ui/Section'
import { PostCard } from './PostCard'
import { ALL_CATEGORIES, getBlogPosts } from './PostsSection.utils'
import { PostsSectionSkeleton } from './PostsSectionSkeleton'

const gridClassName = 'grid gap-7.5'
const gridStyle = { gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }

const PostsEmpty = ({ message }: { message: string }) => (
  <p className="py-15 text-center text-[18px] text-faint">{message}</p>
)

const PostsSection = () => {
  const [query, setQuery] = useState<Record<string | 'data.category', string>>({})
  const { data: posts, isLoading } = useQuery(getBlogPosts({ query }))

  const categories = useMemo(
    () => [ALL_CATEGORIES, ...new Set((posts ?? []).map((post) => post.category).filter(Boolean))],
    [posts],
  )

  if (isLoading) {
    return (
      <Section py="pt-5 pb-10">
        <PostsSectionSkeleton />
      </Section>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <Section py="pt-5 pb-10">
        <PostsEmpty message="No posts published yet — check back soon." />
      </Section>
    )
  }

  const handleCategoryChange = (category: string) => {
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

      <Section py="pt-10 pb-10">
        {posts.length === 0 ? (
          <PostsEmpty message="No posts in this category yet — check back soon." />
        ) : (
          <div className={gridClassName} style={gridStyle}>
            {posts.map((post) => (
              <PostCard key={post.url} post={post} />
            ))}
          </div>
        )}
      </Section>
    </>
  )
}

export default PostsSection

export const registerPostsSection = () => {
  Builder.registerComponent(PostsSection, {
    name: 'PostsSection',
    models: [BUILDER_IO_MODELS.PAGE],
    inputs: [],
  })
}
