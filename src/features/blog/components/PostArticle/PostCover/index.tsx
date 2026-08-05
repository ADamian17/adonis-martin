import { gridOverlay } from '../../PostsSection/PostsSection.utils'
import { ArticleColumn } from '../ArticleColumn'
import type { PostArticleData } from '../PostArticle.utils'

type PostCoverProps = { post: PostArticleData }

/**
 * An image cover is shown plain, exactly as the design draws it. Without one,
 * the panel falls back to the post's gradient plus the grid texture.
 */
export const PostCover = ({ post }: PostCoverProps) => (
  <ArticleColumn maxWidth={1080} className="mt-9">
    {post.coverImage ? (
      <div className="overflow-hidden rounded-2xl border border-border">
        {/* Decorative: the headline above already names the post. */}
        <img src={post.coverImage} alt="" className="block h-auto w-full" />
      </div>
    ) : (
      <div
        className="relative overflow-hidden rounded-2xl border border-border"
        style={{
          height: 'clamp(240px, 34vw, 440px)',
          background: post.coverGradient ?? undefined,
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.22]"
          style={{ background: gridOverlay('64px 128px') }}
        />
      </div>
    )}
  </ArticleColumn>
)
