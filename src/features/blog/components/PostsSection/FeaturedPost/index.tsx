import { Link as RouterLink } from '@tanstack/react-router'
import { format } from 'date-fns'
import { ArrowRight, Star } from 'lucide-react'
import type { BlogPost } from '@/.gql/graphql'
import { toRouterPath } from '@/ui/routerLinkProps'
import { Section } from '@/ui/Section'
import { getCategoryLabel } from '../PostsSection.utils'

/**
 * A `blog-post` picked on the page through Builder's reference input, which
 * `fetchContent` resolves into `value.data`.
 */
export type FeaturedPostReference = {
  /** Present whether or not Builder resolved the reference; the listing keys its
   *  dedupe on this, since `value` only exists once resolved. */
  id?: string | null
  value?: BlogPost
} | null

type FeaturedPostProps = { featuredPost?: FeaturedPostReference }

const cardClassName =
  'grid overflow-hidden rounded-2xl border border-border bg-card-alt no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_18px_40px_var(--color-shadow)]'

export const FeaturedPost = ({ featuredPost }: FeaturedPostProps) => {
  const post = featuredPost?.value?.data

  // Nothing is picked, or the pick has no destination yet.
  if (!post?.url || !post.title) return null

  return (
    <Section py="pt-12.5 pb-5">
      <RouterLink
        to={toRouterPath(post.url)}
        className={cardClassName}
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
      >
        <div
          className="flex min-h-85 items-end p-8.5"
          style={{ background: post.coverGradient ?? undefined }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-semibold text-[14px] text-white backdrop-blur-xs">
            <Star size={14} fill="currentColor" aria-hidden="true" />
            Featured
          </span>
        </div>

        <div className="flex flex-col justify-center gap-5 p-11">
          <div className="flex flex-wrap items-center gap-3.5 font-medium text-[15px] text-faint">
            {getCategoryLabel(post.category) && (
              <span className="rounded-lg border border-purple-border bg-purple-fill px-3.25 py-1.5 font-semibold text-[13px] text-accent">
                {getCategoryLabel(post.category)}
              </span>
            )}
            {post.publishedDate && (
              <span>{format(new Date(post.publishedDate), 'MMM d, yyyy')}</span>
            )}
            {(post.readMinutes ?? 0) > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <span>{post.readMinutes} min read</span>
              </>
            )}
          </div>

          <h2
            className="m-0 font-semibold text-heading leading-[1.24]"
            style={{ fontSize: 'clamp(26px, 2.4vw, 34px)' }}
          >
            {post.title}
          </h2>

          {post.excerpt && (
            <p
              className="m-0 font-normal text-[17px] text-body leading-[1.62]"
              style={{ maxWidth: '52ch' }}
            >
              {post.excerpt}
            </p>
          )}

          <span className="inline-flex items-center gap-2.5 font-semibold text-[17px] text-accent">
            Read article
            <ArrowRight size={19} aria-hidden="true" />
          </span>
        </div>
      </RouterLink>
    </Section>
  )
}
