import { createFileRoute } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'
import { fetchContent } from '@/services/builderIO/fetchContent'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const urlPath = `/${params['_splat']}`
    const pageContent = await fetchContent('page', urlPath)
    const heroContent = await fetchContent('hero', urlPath)

    return {
      pageContent,
      heroContent,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { pageContent, heroContent } = Route.useLoaderData()

  return (
    <>
      <RenderBuilderContent content={heroContent} model={BUILDER_IO_MODELS.HERO} />
      <RenderBuilderContent content={pageContent} model={BUILDER_IO_MODELS.PAGE} />
    </>
  )
}
