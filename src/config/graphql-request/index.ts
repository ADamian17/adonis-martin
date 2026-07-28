import { GraphQLClient } from 'graphql-request'

/**
 * Client for Builder's GraphQL API, used for content the Content API cannot page
 * over cleanly — currently the blog listing.
 *
 * The endpoint already carries the space's public API key as a path segment, so
 * no auth header is set here.
 */
export const graphqlClient = new GraphQLClient(import.meta.env.VITE_BUILDER_GQL_ENDPOINT)
