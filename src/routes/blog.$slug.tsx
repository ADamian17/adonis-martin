import { createFileRoute } from '@tanstack/react-router'
import { SITE_SEO } from '@/config/site-seo'
import { PostArticle } from '@/features/blog/components/PostArticle'
import { fetchContent } from '@/services/builderIO/fetchContent'

/**
 * A blog post, read from the `blog-post` model by its own `url`.
 *
 * A real route rather than a Builder page: the article is one CMS record, so
 * there is nothing to lay out per post. It wins over the catch-all `/$` because
 * a static segment ranks above a splat.
 */
export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const url = `/blog/${params.slug}`.trim()
    const post = await fetchContent('blog-post', url)

    return { post }
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post?.data

    if (!post) return {}

    return {
      meta: [
        { title: `${post.title} | ${SITE_SEO.name}` },
        { name: 'description', content: post.excerpt ?? '' },
        { property: 'og:title', content: post.title ?? '' },
        { property: 'og:description', content: post.excerpt ?? '' },
        ...(post.coverImage ? [{ property: 'og:image', content: post.coverImage }] : []),
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { post } = Route.useLoaderData()

  if (!post) {
    return (
      <div className="mx-auto max-w-190 px-[clamp(20px,6vw,40px)] py-25 text-center">
        <p className="text-[18px] text-faint">That post could not be found.</p>
      </div>
    )
  }

  return <PostArticle post={post} />
}
