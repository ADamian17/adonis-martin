import { gql } from '@apollo/client';

export const PageQuery = gql`
  query PageQuery {
    pageTemplate(id: "5QEfILw3ijx9ZfcVoTfDYw") {
      internalName
      seo {
        title
        description
      }
      skillsSectionCollection {
        items {
          internalName
        }
      }
    }
  }
`
