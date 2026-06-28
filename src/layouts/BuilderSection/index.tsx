import { useQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'
import { RenderBuilderContent } from '@/components/BuilderComponent'
import { fetchContent } from '@/services/builderIO/fetchContent'
import type { BuilderIOModel } from '@/services/builderIO/models'

interface BuilderSectionProps {
  model: BuilderIOModel
}

const QUERY_KEY_PREFIX = 'builder-section'

const BuilderSection = ({ model }: BuilderSectionProps) => {
  const params = useParams({ strict: false })
  const urlPath = `/${params._splat}`.trim()

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY_PREFIX, model],
    queryFn: async () => {
      return await fetchContent(model, urlPath)
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <RenderBuilderContent content={data} model={model} />
}

export default BuilderSection
