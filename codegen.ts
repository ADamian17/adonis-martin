import type { CodegenConfig } from '@graphql-codegen/cli'
import { config as loadEnv } from 'dotenv'

// Vite's `import.meta.env` is not available in this Node script, so load the env
// files directly. `.env.local` takes precedence over `.env`.
loadEnv({ path: ['.env.local', '.env'] })

const schema = process.env.VITE_BUILDER_GQL_ENDPOINT

// Fails here rather than inside codegen, where an undefined schema surfaces as a
// confusing "Failed to load schema" with no mention of the missing variable.
if (!schema) {
  throw new Error(
    'VITE_BUILDER_GQL_ENDPOINT is not set. Copy .env.example to .env and fill it in before running codegen.',
  )
}

const config: CodegenConfig = {
  overwrite: true,
  schema,
  documents: ['src/**/*.{ts,tsx}', '!./src/.gql/**/*.ts'],
  generates: {
    './src/.gql/': {
      preset: 'client',
      plugins: ['typescript'],
      config: {
        useTypeImports: true,
        skipTypename: true,
        avoidOptionals: {
          field: true,
          object: true,
          defaultValue: true,
          inputValue: false,
        },
        enumsAsTypes: true,
        dedupeFragments: true,
      },
      presetConfig: {
        fragmentMasking: false,
        useTypeImports: true,
      },
    },
  },
}

export default config
