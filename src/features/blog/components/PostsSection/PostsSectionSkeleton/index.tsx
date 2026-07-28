import { useMemo } from 'react'

interface PostsSectionSkeletonProps {
  count?: number
}

export const PostsSectionSkeleton = ({ count = 3 }: PostsSectionSkeletonProps) => {
  const skeletonKeys = useMemo(
    () => Array.from({ length: count }, () => crypto.randomUUID()),
    [count],
  )

  return (
    <div
      className="grid gap-7.5"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}
    >
      {skeletonKeys.map((key) => (
        <div
          key={key}
          aria-hidden="true"
          className="h-105 animate-pulse rounded-[14px] border border-border bg-card-alt"
        />
      ))}
    </div>
  )
}
