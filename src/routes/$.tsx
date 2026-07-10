import { createFileRoute } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'
import { buildPageHead } from '@/services/builderIO/buildPageHead'
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
  head: ({ loaderData, params }) => buildPageHead({
    pageContent: loaderData?.pageContent ?? null,
    urlPath: `/${params._splat}`.trim(),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const { pageContent } = Route.useLoaderData()

  return <RenderBuilderContent content={pageContent} model={BUILDER_IO_MODELS.PAGE} />
}
