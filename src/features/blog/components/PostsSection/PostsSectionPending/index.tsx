import { Section } from '@/ui/Section'
import { PostsSectionSkeleton } from '../PostsSectionSkeleton'

export const PostsSectionPending = () => (
  <Section py="pt-5 pb-10">
    <div className="grid gap-7.5 grid-cols-[repeat(auto-fill,minmax(340px,1fr))]">
      <PostsSectionSkeleton />
    </div>
  </Section>
)
