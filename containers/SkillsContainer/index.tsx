import React from "react";

import Container from "../../UI/Container";

import styles from "./SkillsContainer.module.scss";
import Heading from "../../components/Heading";
import RingsFigure from "../../components/RingsFigure";

export type SkillsContainerType = {
  skillData: Queries.ContentfulPageTemplate["skillsSection"]
};

const SkillsContainer: React.FC<SkillsContainerType> = ({
  skillData
}) => {
  const skillsLits = skillData && skillData.map((skill) => (
    <div key={skill?.id} className={styles.skillsItem}>
      <Heading copy={skill?.name!} className={styles.skillHeadline} />
      <p className={styles.skillSubcopy}>{skill?.skillYear}</p>
    </div>
  ));

  return (
    <Container className={styles.skillContainer}>
      <div className={styles.skillsList}>
        {skillsLits}
      </div>

      <RingsFigure className={styles.figure} />
    </Container>
  )
}

export default SkillsContainer;