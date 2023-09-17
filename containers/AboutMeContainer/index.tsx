import React from "react";

import HeadingWrapper from "../../components/HeadingWrapper";

import styles from "./AboutMeContainer.module.scss"
import { GatsbyImage } from "gatsby-plugin-image";

export type AboutMeContainerType = {
  aboutMeData: Queries.ContentfulPageTemplate["aboutMeSection"]
};

const AboutMeContainer: React.FC<AboutMeContainerType> = ({ aboutMeData }) => (
  <section className={styles.aboutMeContainer} id="about-me">
    <div className={styles.aboutMeContentWrapper}>

      <GatsbyImage
        alt={aboutMeData?.aboutMeImage?.title!}
        className={styles.aboutMeImg}
        image={aboutMeData?.aboutMeImage?.gatsbyImage!}
      />

      <div className={styles.aboutMeContent}>
        <HeadingWrapper copy='About Me' variant="dark" className={styles.aboutMeHeadline} />

        <p className={styles.aboutMeCopy}>{aboutMeData?.aboutMeCopy?.aboutMeCopy}</p>
      </div>
    </div>
  </section>
)

export default AboutMeContainer;