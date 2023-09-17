import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { gql } from "@apollo/client";

import { useDefaultNav } from "@/hooks/useDefaultNav";
import HomePageLayout from "@/layouts/HomePageLayout";

import MainNav from "@/layouts/MainNav";
import createApolloClient from "@/libs/apollo-client";
import { PageQuery } from '@/libs/HomePageFragments';

export default function Home({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { pageTemplate: { heroSection, footerSection } } = pageData

  return (
    <HomePageLayout footerData={footerSection} heroData={heroSection}>

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
