import { Link as RouterLink } from '@tanstack/react-router'
import { format } from 'date-fns'
import { ArrowLeft } from 'lucide-react'

import { toRouterPath } from '@/ui/routerLinkProps'
import { getCategoryLabel } from '../../PostsSection/PostsSection.utils'
import { ArticleColumn } from '../ArticleColumn'
import { AUTHOR_AVATAR, AUTHOR_NAME, AUTHOR_ROLE, type PostArticleData } from '../PostArticle.utils'
import { PostShare } from '../PostShare'

type PostHeaderProps = { post: PostArticleData }

const metaClassName = 'font-medium text-[15px] text-faint'

export const PostHeader = ({ post }: PostHeaderProps) => {
  const category = getCategoryLabel(post.category)

  return (
    <ArticleColumn maxWidth={820} className="pt-12.5">
      <RouterLink
        to={toRouterPath('/blog')}
        className="mb-7.5 inline-flex items-center gap-2 font-medium text-[16px] text-faint no-underline transition-colors hover:text-heading"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Back to all posts
      </RouterLink>

      <div className="mb-5.5 flex flex-wrap items-center gap-3.5">
        {category && (
          <span className="rounded-lg border border-purple-border bg-purple-fill px-3.75 py-1.75 font-semibold text-[14px] text-accent">
            {category}
          </span>
        )}
        {post.publishedDate && (
          <span className={metaClassName}>
            {format(new Date(post.publishedDate), 'MMM d, yyyy')}
          </span>
        )}
        {(post.readMinutes ?? 0) > 0 && (
          <>
            <span aria-hidden="true" className="text-faint">
              ·
            </span>
            <span className={metaClassName}>{post.readMinutes} min read</span>
          </>
        )}
      </div>

      <h1
        className="m-0 mb-5.5 font-semibold text-heading leading-[1.16]"
        style={{ fontSize: 'clamp(34px, 4.4vw, 50px)' }}
      >
        {post.title}
      </h1>

      {post.excerpt && (
        <p className="m-0 mb-7.5 font-normal text-[20px] text-body leading-[1.6]">{post.excerpt}</p>
      )}

      <div className="flex items-center gap-4 border-border border-b pb-8.5">
        <img
          src={AUTHOR_AVATAR}
          alt={AUTHOR_NAME}
          className="size-13.5 shrink-0 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="font-semibold text-[17px] text-heading">{AUTHOR_NAME}</div>
          <div className="font-normal text-[15px] text-faint">{post.authorRole || AUTHOR_ROLE}</div>
        </div>
        <PostShare title={post.title ?? ''} />
      </div>
    </ArticleColumn>
  )
}
