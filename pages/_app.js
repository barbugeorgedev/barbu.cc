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
import { getAuthorsById } from "@/graphql/apollo/authors";

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function App({ Component, pageProps, topMenu, footerMenu, admin }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            {isDevelopment && isSocket && <ClientReload />}
            <Analytics />
            <LayoutWrapper topMenu={topMenu} footerMenu={footerMenu} authorMetaData={admin} >
                <Component {...pageProps} />
            </LayoutWrapper>
        </ThemeProvider>
    )
}


App.getInitialProps = async (context) => {

    const topMenu = await getTopMenu();
    const footerMenu = await getFooterMenu();
    const admin = await getAuthorsById(1); 
    
    const store = { admin };
    const componentProps = context?.Component?.getInitialProps ? await context?.Component?.getInitialProps({ ...context, store }) : {};
    return { props: { initialReduxState: store, ...componentProps }, topMenu, footerMenu}

}

export default App