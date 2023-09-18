import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from '@apollo/client';
import { createFragmentRegistry } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CF_SPACE_ID}/`,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN}`,
    },
  };
});

const createApolloClient = () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      fragments: createFragmentRegistry(gql`
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
              width
              height
              url
            }
          }
        }

        fragment SkillsSection on PageTemplate {
          skillsSectionCollection {
            items {
              name
              skillYear
            }
          }
        }

        fragment ProjectsSection on PageTemplate {
          projectsSectionCollection {
            items {
              name
              demoLink
              codebaseLink
              techUsedCollection {
                items {
                  name
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
        }

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
      `),
    }),
  });
};

export default createApolloClient;
