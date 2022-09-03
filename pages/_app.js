import '@/styles/tailwind.css'
import '@/styles/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import App from 'next/app'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@data/siteMetadata'
import Analytics from '@components/analytics'
import LayoutWrapper from '@layouts/LayoutWrapper'
import { ClientReload } from '@components/ClientReload'


import { ApolloProvider } from "@apollo/client";
import { getApolloClient } from "@apolloClient";

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function MyApp({ Component, pageProps, store }) {
    const client = getApolloClient();

    return (
        <ApolloProvider client={client}>
            <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                </Head>
                {isDevelopment && isSocket && <ClientReload />}
                <Analytics />
                <LayoutWrapper>
                    <Component {...pageProps} />
                </LayoutWrapper>
            </ThemeProvider>
        </ApolloProvider>
    )
}


MyApp.getInitialProps = async (appContext) => {
  
    const appProps = await App.getInitialProps(appContext);
    const store = [];

    return { ...appProps, store}
}

export default MyApp