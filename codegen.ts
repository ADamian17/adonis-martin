import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

/* https://the-guild.dev/graphql/codegen/docs/getting-started */

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_BUILDER_GQL_ENDPOINT}`]: {
        headers: {
          authorization: `Bearer ${process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    "types/contentful.d.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        dedupeOperationSuffix: true,
        noExport: true,
        skipTypename: true,
        omitOperationSuffix: true,
        typesPrefix: "Contentful",
        avoidOptionals: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;
