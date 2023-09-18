import React from "react";

import Container from "@/components/UI/Container";

import styles from "./SkillsContainer.module.scss";
import RingsFigure from "@/components/RingsFigure";
import Heading from "@/components/Heading";

export type SkillsContainerType = {
  skillData: any
};

const SkillsContainer: React.FC<SkillsContainerType> = ({
  skillData
}) => {
  const skillsLits = skillData && skillData.map((skill: any) => (
    <div key={skill.name} className={styles.skillsItem}>
      <Heading copy={skill?.name!} className={styles.skillHeadline} />
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