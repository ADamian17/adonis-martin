import { AuthorBox } from './AuthorBox'
import type { PostArticleEntry } from './PostArticle.utils'
import { PostBody } from './PostBody'
import { PostCover } from './PostCover'
import { PostHeader } from './PostHeader'

type PostArticleProps = { post: PostArticleEntry }

/**
 * The article page, in the four bands the design lays out.
 *
 * Takes the whole entry and unwraps `data` once here, so the bands stay flat
 * and the entry's `id` stays available for anything that needs the record
 * itself — related posts excluding the current one, for instance.
 */
export const PostArticle = ({ post }: PostArticleProps) => {
  if (!post.data) return null

  return (
    <>
      <PostHeader post={post.data} />
      <PostCover post={post.data} />
      <PostBody post={post.data} />
      <AuthorBox post={post.data} />
    </>
  )
}
