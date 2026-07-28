import { useEffect, useRef } from 'react'

interface UseWaypointProps {
  isFetchingNextPage: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
}

/**
 * Infinite-scroll trigger: observes a sentinel `div` and calls `fetchNextPage`
 * when it scrolls into view (100px early), while a page isn't already loading.
 */
export const useWaypoint = ({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: UseWaypointProps) => {
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loadMoreRef.current || isFetchingNextPage || !hasNextPage) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          fetchNextPage()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px', // Start loading 100px before the element is visible
      },
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [isFetchingNextPage, hasNextPage, fetchNextPage])

  return { loadMoreRef }
}
