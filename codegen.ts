/// <reference types="node" />

import type { CodegenConfig } from '@graphql-codegen/cli'
import { config as dotenvConfig } from 'dotenv'

dotenvConfig()

/* https://the-guild.dev/graphql/codegen/docs/getting-started */

const config: CodegenConfig = {
  schema: process.env.PUBLIC_VITE_GQL_API_ENDPOINT,
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true,
  generates: {
    './src/.gql/': {
      preset: 'client',
      config: {
        avoidOptionals: true,
        fragmentMasking: false,
        useTypeImports: true,
      },
    },
  },
}

export default config
