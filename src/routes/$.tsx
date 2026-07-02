import { createFileRoute } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'
import { fetchContent } from '@/services/builderIO/fetchContent'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const urlPath = `/${params._splat}`.trim()
    const pageContent = await fetchContent('page', urlPath)

    return {
      pageContent,
    }
  },
  head: ({ loaderData }) => {
    const defaultTitle = 'Adonis D. Martin | Frontend Engineer'
    const defaultDescription =
      'Adonis D. Martin is a frontend engineer and web developer specializing in building performant, accessible, and user-friendly web applications.'

    if (!loaderData?.pageContent)
      return {
        meta: [{ name: 'description', content: defaultDescription }, { title: defaultTitle }],
      }

    const { data } = loaderData.pageContent

    return {
      meta: [
        { name: 'description', content: data?.description ?? defaultDescription },
        { title: data?.title ?? defaultTitle },
      ],
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { pageContent } = Route.useLoaderData()

  return <RenderBuilderContent content={pageContent} model={BUILDER_IO_MODELS.PAGE} />
}
