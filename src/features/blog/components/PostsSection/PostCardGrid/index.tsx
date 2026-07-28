import type { BlogPostQuery } from '@/.gql/graphql'
import { useWaypoint } from '@/hooks/useWaypoint'
import { Section } from '@/ui/Section'
import { PostsSectionEmpty } from '../PostsSectionEmpty'
import { PostsSectionSkeleton } from '../PostsSectionSkeleton'
import { PostCard } from './PostCard'

type PostCardGridProps = {
  posts: NonNullable<NonNullable<NonNullable<BlogPostQuery['blogPost']>[number]>['data']>[]
  category?: string
  isFetchingNextPage: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
}

export const PostCardGrid = ({
  posts,
  category,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: PostCardGridProps) => {
  const { loadMoreRef } = useWaypoint({ isFetchingNextPage, hasNextPage, fetchNextPage })

  if (!posts || (posts.length === 0 && category && !isFetchingNextPage)) {
    return (
      <Section py="pt-10 pb-10">
        <PostsSectionEmpty message="No posts in this category yet — check back soon." />
      </Section>
    )
  }

  return (
    <Section py="pt-10 pb-10">
      <div
        className="grid gap-7.5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
      >
        {posts.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}

        {isFetchingNextPage && <PostsSectionSkeleton />}
      </div>

      {hasNextPage && (
        <>
          {!isFetchingNextPage && <div ref={loadMoreRef} aria-hidden="true" className="h-25" />}
          {/* Keyboard/screen-reader fallback for the scroll-driven load. */}
          <button
            type="button"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="sr-only"
          >
            Load more posts
          </button>
        </>
      )}
    </Section>
  )
}
