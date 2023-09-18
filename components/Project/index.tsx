import React from "react";
import Image from "next/image";

import { useGenBlurDataURL } from "@/hooks/useGenBlurDataURL";
import Button from "../Button";
import Heading from "../Heading";

import styles from "./Project.module.scss"


export type ProjectType = {
  projectData: any
};

const Project: React.FC<ProjectType> = ({ projectData }) => {
  const {
    name,
    projectImage,
    demoLink,
    codebaseLink,
    techUsedCollection
  } = projectData;

  const techList = techUsedCollection?.items && techUsedCollection?.items.map((tech: any) => (
    <li key={tech?.name}>{tech?.name}</li>
  ))

  return (
    <div className={styles.project}>
      <div className={styles.imageWrapper}>
        <Image
          alt={projectImage?.title!}
          src={projectImage?.url!}
          className={styles.img}
          width={500}
          height={500}
        />
      </div>

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
