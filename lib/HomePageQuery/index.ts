import { gql } from "@apollo/client";

export const PageQuery = gql`
  query PageQuery {
    pageTemplate(id: "5QEfILw3ijx9ZfcVoTfDYw") {
      internalName
      seo {
        title
        description
      }
      heroSection {
        headline
        subcopy
        heroCtaLabel
        heroCtaLink
        heroNavCollection {
          items {
            menuLabel
            menuLink
            menuTarget
          }
        }
        heroImage {
          width
          height
          url
        }
      }
      skillsSectionCollection {
        items {
          internalName
        }
      }
      projectsSectionCollection {
        items {
          name
          demoLink
          codebaseLink
          techUsedCollection {
            items {
              internalName
            }
          }
          projectImage {
            title
            url
            width
            height
          }
        }
      }
      footerSection {
        headline
        subcopy
        footerNavCollection {
          items {
            menuIcon
            menuLabel
            menuLink
            menuTarget
          }
        }
      }
    }
  }
`;
