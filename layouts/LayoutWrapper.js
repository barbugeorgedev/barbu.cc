import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from '../components/Link'
import SectionContainer from '../components/SectionContainer'
import Footer from '../components/sections/Footer'
import MobileNav from '../components/navbar/MobileNav'
import Navbar from '@components/navbar/Navbar'
import ThemeSwitch from '../components/ThemeSwitch'
import CommandPalette from '@components/navbar/CommandPalette'
import NowPlaying from '@components/spotify/NowPlaying'
import * as PropTypes from "prop-types";


const LayoutWrapper = ({ children, topMenu, footerMenu, fullMenu }) => {

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10 z-50">
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
          <CommandPalette navigation={fullMenu} />
          <ThemeSwitch />
          <MobileNav topMenu={topMenu.attributes.TopMenu}/>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <NowPlaying />
        <Footer/>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper