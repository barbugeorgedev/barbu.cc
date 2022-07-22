import {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineFacebook,
    AiOutlineTwitter,
    AiOutlineGlobal,
  } from 'react-icons/ai'
  import { FaLinkedinIn } from 'react-icons/fa'
  import { FiExternalLink, FiMail, FiFolder } from 'react-icons/fi'

const components = {
    mail: FiMail,
    github: AiOutlineGithub,
    facebook: AiOutlineFacebook,
    linkedin: FaLinkedinIn,
    twitter: AiOutlineTwitter,
    website: AiOutlineGlobal,
    external: FiExternalLink,
}


const SocialIcon = ({ kind, href, size = 8 }) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
      return null
  
    const SocialSvg = components[kind]
  
    return (
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600" 
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-${size} w-${size}`}
        />
      </a>
    )
  }
  
const FolderIcon = ({fill = 'none', stroke = 'none', size = 5}) => {
  const FolderSvg = FiFolder

  return <FolderSvg 
        size={`${size}em`} 
        fill={`${fill}`}
        stroke={`${stroke}`}
        className={`text-gray-700 hover:text-primary-color-500 dark:text-gray-200 dark:hover:text-primary-color-dark-500`}  
  />
}

export { SocialIcon, FolderIcon }