import { gql } from '@apollo/client';

export const PageQuery = gql`
  query PageQuery {
    pageTemplate(id: "4EbpvnShzFsIqzTc7S7bwI") {
      ...FooterSection
      ...HeroSection
      ...ProjectsSection
      ...SkillsSection
    }
  }
`;
