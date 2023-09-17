import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import createApolloClient from '@/libs/apollo-client';
import { interVar } from '@/assets/fonts/InterVar';

import "@/styles/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Head>
        <meta name="description" content="Nice to meet you! I'm Adonis D. Martin. Based in San Francisco, CA, I'm a front-end developer passionate about building accessible web apps that users love." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/icons/favicon.ico" />

        <title>Adonis Damian Martin | Portfolio</title>
      </Head>

      <div className={interVar.className}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}
