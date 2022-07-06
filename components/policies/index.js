import IubendaCookiesScript from './IubendaCookie'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Policies = () => {
  return (
    <>
      {isProduction && siteMetadata.policies.cookies.iubenda && <IubendaCookiesScript />}
    </>
  )
}

export default Policies
