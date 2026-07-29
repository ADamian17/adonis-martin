import { Link as RouterLink } from '@tanstack/react-router'
import { format } from 'date-fns'
import { ArrowUpRight } from 'lucide-react'
import type { BlogPostQuery } from '@/.gql/graphql'
import { toRouterPath } from '@/ui/routerLinkProps'
import { getCategoryLabel } from '../../PostsSection.utils'

type PostCardProps = {
  post: NonNullable<NonNullable<NonNullable<BlogPostQuery['blogPost']>[number]>['data']>
}

/**
 * Wraps the whole card, so it deliberately uses the router's own Link rather
 * than `ui/Link` or `ui/TextLink`: both carry display and alignment classes for
 * inline content, which fight a card's `flex flex-col`.
 */
const cardClassName =
  'group flex flex-col overflow-hidden rounded-[14px] border border-border bg-card-alt no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_var(--color-shadow)]'

export const PostCard = ({ post }: PostCardProps) => {
  if (!post) return null

  return (
    <RouterLink to={toRouterPath(post?.url ?? '')} className={cardClassName}>
      <div className="relative h-47.5" style={{ background: post?.coverGradient ?? undefined }}>
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]" />
        <span className="absolute top-4 left-4 rounded-lg bg-card-raised px-3.25 py-1.5 font-semibold text-[13px] text-accent">
          {getCategoryLabel(post.category)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-7">
        <div className="flex items-center gap-2.5 font-medium text-[14px] text-faint">
          <span>{format(new Date(post?.publishedDate ?? ''), 'MMM d, yyyy')}</span>
          {/* Read time is optional on the model, so an unset value shows nothing
            rather than "0 min read". */}
          {(post?.readMinutes ?? 0) > 0 && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post?.readMinutes} min read</span>
            </>
          )}
        </div>

        <h3 className="m-0 font-semibold text-[21px] text-heading leading-[1.3]">{post?.title}</h3>

        {post?.excerpt && (
          <p className="m-0 flex-1 font-normal text-[15.5px] text-body leading-[1.58]">
            {post?.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="font-semibold text-[15px] text-heading">Adonis D. Martin</span>
          <span className="flex size-9.5 items-center justify-center rounded-lg bg-card-raised text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-card-cream">
            <ArrowUpRight size={17} strokeWidth={2.2} aria-hidden="true" />
          </span>
        </div>
      </div>
    </RouterLink>
  )
}
