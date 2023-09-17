import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { gql } from "@apollo/client";

import { useDefaultNav } from "@/hooks/useDefaultNav";
import HomePageLayout from "@/layouts/HomePageLayout";

import MainNav from "@/layouts/MainNav";
import createApolloClient from "@/libs/apollo-client";

export default function Home({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log({ pageData });

  return (
    <>home</>
    // <HomePageLayout footerData={null} heroData={null}>
    //   <MainNav />
    // </HomePageLayout>
  )
}

const query = gql`
  query PageQuery {
    pageTemplate(id: "4EbpvnShzFsIqzTc7S7bwI") {
      ...HeroFragment
      ...FooterFragment
    }
  }
`

export async function getStaticProps() {
  try {
    const client = createApolloClient();
    const { data: pageData } = await client.query({
      query
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
