import Link from '../Link'
import siteMetadata from '@/data/siteMetadata'
import { SocialIcon } from '@components/icons'
import { currentDayName } from '@lib/utils/datetime'


const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between md:flex-row mt-10 mb-4">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
          <SocialIcon kind="github" href={siteMetadata.github} size="5" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
        </div>
        <div className="flex flex-col text-center mb-3 space-x-2 text-sm text-gray-500 sm:flex-row dark:text-gray-400">
          <div className="flex flex-row">
            <div className="mr-1">{`Developed by `}</div>
            <Link href={siteMetadata.authorUrl}>{siteMetadata.author}</Link>
          </div>
          <div className="hidden sm:block">{`|`}</div> 
          <Link href="https://qod.barbu.cc" className="link-underline">
              {`Have a good ${currentDayName()}!`}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer