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

export const FooterFragment = gql`
  fragment FooterSection on PageTemplate {
    footerSection {
      headline
      subcopy
      footerNavCollection {
        items {
          menuLabel
          menuLink
          menuTarget
          menuIcon
        }
      }
    }
  }
`;
