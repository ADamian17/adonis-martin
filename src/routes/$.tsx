import { builder } from '@builder.io/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'
import { BUILDER_IO_MODELS } from '@/services/builderIO/models'

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const pageContent = await builder
      .get(BUILDER_IO_MODELS.PAGE, {
        userAttributes: { urlPath: `/${params['_splat']}` },
      })
      .promise()
    
    if (!pageContent) throw notFound()

    return { pageContent }
  },
  component: RouteComponent,
  notFoundComponent: () => <div>Not Found</div>,
})

function RouteComponent() {
  const { pageContent } = Route.useLoaderData()

  return <RenderBuilderContent content={pageContent} model={BUILDER_IO_MODELS.PAGE} />
}
