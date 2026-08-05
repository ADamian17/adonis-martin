import { Link as RouterLink } from '@tanstack/react-router'

import { toRouterPath } from '@/ui/routerLinkProps'
import { ArticleColumn } from '../ArticleColumn'
import { AUTHOR_AVATAR, AUTHOR_BIO, AUTHOR_NAME, type PostArticleData } from '../PostArticle.utils'

type AuthorBoxProps = { post: PostArticleData }

export const AuthorBox = ({ post }: AuthorBoxProps) => (
  <ArticleColumn maxWidth={760} className="mt-10">
    <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-card-alt p-9">
      <img src={AUTHOR_AVATAR} alt="" className="size-19.5 shrink-0 rounded-full object-cover" />

      <div className="flex-1 basis-65">
        <div className="font-semibold text-[20px] text-heading">Written by {AUTHOR_NAME}</div>
        <p className="mt-1.5 mb-0 font-normal text-[16px] text-body leading-[1.6]">
          {post.authorBio || AUTHOR_BIO}
        </p>
      </div>

      <RouterLink
        to={toRouterPath('/contact-me')}
        className="whitespace-nowrap rounded-lg bg-accent px-6 py-3.5 font-medium text-[16px] text-card-cream no-underline transition-colors hover:bg-accent/90"
      >
        Work with me
      </RouterLink>
    </div>
  </ArticleColumn>
)
