import React from "react";

import styles from "./Project.module.scss"
import Heading from "../Heading";
import Button from "../Button";
import Image from "next/image";

export type ProjectType = {
  projectData: any
};

const Project: React.FC<ProjectType> = ({ projectData }) => {
  const {
    name,
    projectImage,
    demoLink,
    codebaseLink,
    techUsed
  } = projectData;
  const techList = techUsed && techUsed.map((tech: any) => (
    <li key={tech?.id}>{tech?.name}</li>
  ))

  return (
    <div className={styles.project}>
      <Image
        width={540}
        height={400}
        alt={projectImage?.title!}
        src={projectImage?.url!}
        className={styles.img}
      />

      <div className={styles.headlineWrapper}>
        <Heading copy={name!} />

        <ul className={styles.techList}>
          {techList}
        </ul>
      </div>

      <div className={styles.btnGroup}>
        <Button path={demoLink!} label="view project" target="_blank" />
        <Button path={codebaseLink!} label="view code" target="_blank" />
      </div>
    </div>
  )
}

export default Project;
