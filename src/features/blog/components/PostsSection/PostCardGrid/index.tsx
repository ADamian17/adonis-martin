import type { BlogPostQuery } from '@/.gql/graphql'
import { useWaypoint } from '@/hooks/useWaypoint'
import { Section } from '@/ui/Section'
import { PostsSectionEmpty } from '../PostsSectionEmpty'
import { PostsSectionSkeleton } from '../PostsSectionSkeleton'
import { PostCard } from './PostCard'

type PostCardGridProps = {
  posts: NonNullable<NonNullable<NonNullable<BlogPostQuery['blogPost']>[number]>['data']>[]
  category?: string
  /** The hero is showing a post, so an empty grid is not an empty blog. */
  hasFeaturedPost?: boolean
  isFetchingNextPage: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
}

export const PostCardGrid = ({
  posts,
  category,
  hasFeaturedPost,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: PostCardGridProps) => {
  const { loadMoreRef } = useWaypoint({ isFetchingNextPage, hasNextPage, fetchNextPage })

  if (!posts?.length && !category && !isFetchingNextPage) {
    // The featured post is excluded from this query, so when it is the only
    // post the grid is empty while the blog plainly is not. Say nothing rather
    // than contradict the hero directly above.
    if (hasFeaturedPost) return null

    return (
      <Section py="pt-5 pb-10">
        <PostsSectionEmpty message="No posts published yet — check back soon." />
      </Section>
    )
  }

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
