import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { builderIOStart } from 'vite-plugin-builder-io-start'

import { SITE_SEO } from './src/config/site-seo'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      tailwindcss(),
      // Supersedes the standalone `tanstackRouter` plugin: generates the route
      // tree itself and adds the SSR/prerender pipeline, so there is no
      // index.html or client-only entry any more.
      //
      // Prerendering is what makes the output servable as static files: without
      // it the client build contains no HTML at all, only assets.
      builderIOStart({
        apiKey: env.VITE_BUILDER_API_KEY,
        command,
        // Reuses the canonical URL the page metadata already derives from, so the
        // sitemap can never disagree with the <link rel="canonical"> tags.
        host: SITE_SEO.url,
        changefreq: 'monthly',
        priorities: { '/': 1.0 },
        // Rendered through the splat route, which has no Builder content at this
        // path and so falls through to the app's not-found view. Written to the
        // output root because that is the file a static host serves for unknown
        // paths. Absent from the sitemap by construction.
        notFound: { path: '/__not-found', outputPath: '404.html' },
      }),
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    ssr: {
      // CommonJS: left external, Node's ESM loader cannot read its named exports
      // and the SSR render 500s. Bundling lets Vite do the interop at build time.
      noExternal: ['@builder.io/react'],
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'EVAL' && warning.id?.includes('node_modules')) return
          warn(warning)
        },
      },
    },
  }
})
