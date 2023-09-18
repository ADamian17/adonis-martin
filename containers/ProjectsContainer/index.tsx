import React from "react";


import Button from "@/components/Button";
import Container from "@/components/UI/Container";
import Headline from "@/components/Headline";
import Project from "@/components/Project";

import styles from "./ProjectsContainer.module.scss"

export type ProjectsContainerType = {
  projectsData: any
};

const ProjectsContainer: React.FC<ProjectsContainerType> = ({ projectsData }) => {
  const list = projectsData && projectsData.map((item: any) => (
    <Project key={item?.name} projectData={item!} />
  ))

  return (
    <Container className={styles.projectContainer} id="projects">
      <Container.Centered>
        <div className={styles.headlineWrapper}>
          <Headline text="Projects" />

          <Button path="#contact" label="contact me" />
        </div>

        <div className={styles.projectList}>
          {list}
        </div>
      </Container.Centered>
    </Container>
  )
}

export default ProjectsContainer;