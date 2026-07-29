import { queryOptions } from '@tanstack/react-query'
import type { BlogPostByUrlQuery } from '@/.gql/graphql'
import { graphqlClient } from '@/config/graphql-request'
import { POST_QUERY, POST_QUERY_KEY } from './PostArticle.query'

/** One `blog-post` entry as the Content API returns it: the record wrapping `data`. */
export type PostArticleEntry = NonNullable<NonNullable<BlogPostByUrlQuery['blogPost']>[number]>

/** The post's own fields, unwrapped from the entry. */
export type PostArticleData = NonNullable<PostArticleEntry['data']>

/**
 * Author details the design shows on every post. `authorRole` and `authorBio`
 * on the post override these, so a post can speak in its own voice.
 */
export const AUTHOR_NAME = 'Adonis D. Martin'
export const AUTHOR_ROLE = 'Frontend Software Engineer'
export const AUTHOR_BIO =
  'Frontend-focused software engineer building fast, accessible, maintainable web interfaces. Writing about the craft of shipping thoughtful UIs.'

/** Uploaded to Builder assets; move to site-settings if the author ever varies. */
export const AUTHOR_AVATAR =
  'https://cdn.builder.io/api/v1/image/assets%2F70a6556cd4734835a4573a01d8132a06%2F1fbd4a989bfe42cfb68b3af3f4b9bdfd'

/** Builder returns rich text as an HTML string, typed by codegen as `unknown`. */
export const getPostBody = (body: unknown) => (typeof body === 'string' ? body : '')

/** A Builder list field arrives as `[{ tag: 'Career' }]`, typed as `unknown`. */
export const getPostTags = (tags: unknown): string[] =>
  Array.isArray(tags)
    ? tags
        .map((entry) => (entry as { tag?: string } | null)?.tag)
        .filter((tag): tag is string => typeof tag === 'string' && tag !== '')
    : []

/** `select` only applies to `useQuery`, so the loader unwraps with this too. */
export const selectPost = (data: BlogPostByUrlQuery): PostArticleData | null =>
  data.blogPost?.[0]?.data ?? null

export const getPostByUrl = (url: string) =>
  queryOptions({
    queryKey: [POST_QUERY_KEY, url],
    queryFn: () => graphqlClient.request(POST_QUERY, { query: { 'data.url': url } }),
    select: selectPost,
  })
