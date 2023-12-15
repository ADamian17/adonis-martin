import React from 'react'

import MainFooter from '../MainFooter';
import MainHero from '../MainHero';

type HomePageLayoutType = {
  children: React.ReactNode;
  footerData: any
  heroData: any
}

const HomePageLayout: React.FC<HomePageLayoutType> = ({ children, footerData, heroData }) => {
  return (
    <>
      {/* <MainHero heroData={heroData} /> */}

      <main>
        {children}
      </main>

      {/* <MainFooter footerData={footerData} /> */}
    </>
  )
}

export default HomePageLayout;
