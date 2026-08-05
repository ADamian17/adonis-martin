import { ArticleColumn } from '../ArticleColumn'
import { getPostBody, getPostTags, type PostArticleData } from '../PostArticle.utils'

type PostBodyProps = { post: PostArticleData }

export const PostBody = ({ post }: PostBodyProps) => {
  const tags = getPostTags(post.tags)

  return (
    <ArticleColumn maxWidth={760} className="article pt-11">
      {/* Rich text authored in Builder; styled by the `.article` rules in main.css. */}
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: CMS-authored article body */}
      <div dangerouslySetInnerHTML={{ __html: getPostBody(post.body) }} />

      {tags.length > 0 && (
        <div className="mt-11 mb-2.5 flex flex-wrap gap-2.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-border bg-card-alt px-4 py-2 font-medium text-[14px] text-body"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </ArticleColumn>
  )
}
