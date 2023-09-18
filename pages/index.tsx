import type { InferGetStaticPropsType } from 'next'

import { PageQuery } from '@/lib/HomePageQuery';
import createApolloClient from "@/lib/apollo-client";
import HomePageLayout from "@/layouts/HomePageLayout";
import ProjectsContainer from '@/containers/ProjectsContainer';
import SkillsContainer from '@/containers/SkillsContainer';

export default function Home({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    pageTemplate: {
      footerSection,
      heroSection,
      projectsSectionCollection,
      skillsSectionCollection,
    }
  } = pageData

  return (
    <HomePageLayout
      footerData={footerSection}
      heroData={heroSection}
    >
      <SkillsContainer skillData={skillsSectionCollection.items} />
      <ProjectsContainer projectsData={projectsSectionCollection.items} />
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
