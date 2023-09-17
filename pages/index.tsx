import type { InferGetStaticPropsType } from 'next'

import { PageQuery } from '@/lib/HomePageQuery';
import createApolloClient from "@/lib/apollo-client";
import HomePageLayout from "@/layouts/HomePageLayout";
import ProjectsContainer from '@/containers/ProjectsContainer';

export default function Home({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { pageTemplate: { heroSection, footerSection, projectsSectionCollection } } = pageData

  return (
    <HomePageLayout footerData={footerSection} heroData={heroSection}>
      <ProjectsContainer projectsData={projectsSectionCollection} />
    </HomePageLayout>
  )
}

export async function getStaticProps() {
  try {
    const client = createApolloClient();
    const { data: pageData } = await client.query({
      query: PageQuery
    });

    return {
      props: {
        pageData
      },
    };
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
