import { builder } from '@builder.io/react'
import { createFileRoute } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'

export const Route = createFileRoute('/$page')({
  loader: async ({ params }) => {
    const pageContent = await builder
      .get('page', {
        userAttributes: { urlPath: `/${params.page}` },
      })
      .promise()

    return { pageContent }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { pageContent } = Route.useLoaderData()

  return <RenderBuilderContent content={pageContent} model="page" />
}
