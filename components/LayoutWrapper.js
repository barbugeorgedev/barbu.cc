import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './sections/Footer'
import MobileNav from './MobileNav'
import Navbar from '@components/navbar/Navbar'
import ThemeSwitch from './ThemeSwitch'
import * as PropTypes from "prop-types";


const LayoutWrapper = ({ children, topMenu, footerMenu }) => {
  console.log('LayoutWrapper', topMenu)
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
          <Navbar topMenu={topMenu.attributes.TopMenu} />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer footerMenu={footerMenu.attributes.FooterMenu}/>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
