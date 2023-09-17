import React from 'react'
import MainFooter from '../MainFooter';

// import MainFooter from '../MainFooter';
// import MainHero from '../../components/Heros/MainHero';

type HomePageLayoutType = {
  children: React.ReactNode;
  footerData: any
  heroData: any
  // footerData: Queries.ContentfulPageTemplate["footerSection"]
  // heroData: Queries.ContentfulPageTemplate["heroSection"]
}

const HomePageLayout: React.FC<HomePageLayoutType> = ({ children, footerData, heroData }) => {
  return (
    <>
      {/* <MainHero heroData={heroData} /> */}

      <main>
        {children}
      </main>

      <MainFooter footerData={footerData} />
    </>
  )
}

export default HomePageLayout;
