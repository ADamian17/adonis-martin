import { createFileRoute } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'
import { fetchContent } from '@/services/builderIO/fetchContent'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const urlPath = `/${params._splat}`.trim()
    const pageContent = await fetchContent('page', urlPath)

    return {
      pageContent
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { pageContent } = Route.useLoaderData()

  return <RenderBuilderContent content={pageContent} model={BUILDER_IO_MODELS.PAGE} />
}
