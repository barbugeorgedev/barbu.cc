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


import { getTopMenu, getFooterMenu, getSearchMenu } from "@graphql/apollo/globals";
import { getAuthorsById } from "@graphql/apollo/authors";

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

function MyApp({ Component, pageProps, topMenu, fullMenu, admin, store }) {
    return (
        <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            {isDevelopment && isSocket && <ClientReload />}
            <Analytics />
            <LayoutWrapper topMenu={topMenu} authorMetaData={admin}  fullMenu={fullMenu} >
                <Component {...pageProps} />
            </LayoutWrapper>
        </ThemeProvider>
    )
}


MyApp.getInitialProps = async (appContext) => {
  
    const appProps = await App.getInitialProps(appContext);

    const topMenu = await getTopMenu();
    const searchMenu = await getSearchMenu();
    const footerMenu = await getFooterMenu();
    const admin = await getAuthorsById(1); 
    const fullMenu = [...topMenu.attributes.TopMenu, ...searchMenu.attributes.SearchMenu, ...footerMenu.attributes.FooterMenu];

    const store = { admin };
    // const componentProps = context?.Component?.getInitialProps ? await context?.Component?.getInitialProps({ ...context, store }) : {};
    // return { props: { ...componentProps, store }, topMenu, footerMenu, fullMenu}

    return { ...appProps, store, topMenu, footerMenu, fullMenu }
}

export default MyApp