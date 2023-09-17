import { gql } from '@apollo/client';

export const HeroFragment = gql`
  fragment HeroSection on PageTemplate {
    heroSection {
      heroCtaLabel
      heroCtaLink
      heroHeadline
      heroSubcopy
      heroNav {
        menuItemsCollection {
          items {
            menuLabel
            menuLink
            menuTarget
          }
        }
      }
      heroImage {
        url
      }
    }
  }
`;

export const PageQuery = gql`
  query PageQuery {
    pageTemplate(id: "4EbpvnShzFsIqzTc7S7bwI") {
      ...HeroSection
      ...FooterSection
    }
  }
`;
