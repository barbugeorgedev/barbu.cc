import '@/styles/tailwind.css'
import '@/styles/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'


import { getTopMenu, getFooterMenu } from "@/graphql/apollo/globals";

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps, topMenu, footerMenu }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            {isDevelopment && isSocket && <ClientReload />}
            <Analytics />
            <LayoutWrapper topMenu={topMenu} footerMenu={footerMenu} >
                <Component {...pageProps} />
            </LayoutWrapper>
        </ThemeProvider>
    )
}


App.getInitialProps = async () => {
    const topMenu = await getTopMenu();
    const footerMenu = await getFooterMenu();

    return { topMenu, footerMenu }
}