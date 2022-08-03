import { SocialIcon, FolderIcon } from '@components/icons'

const Card = ({ title, description, imgSrc, href, github, tech1, tech2, tech3  }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
      <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-primary-500 hover:bg-gray-300 dark:border-gray-700 dark:hover:border-primary-500 dark:hover:bg-gray-800">
        <div className="p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="my-2">
              <FolderIcon stroke="gray" size="3" />
            </div>
            <div className="flex flex-row justify-between">
              <div className="mx-1">
                {href ? <SocialIcon kind="external" href={href} size="5" /> : null}
              </div>
              <div className="mx-1">
                {github ? <SocialIcon kind="github" href={github} size="5" /> : null}
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">{title}</h2>

          <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
          <div className="flex flex-row justify-between">
            <div className="text-gray-400 text-sm font-extralight">
              {tech1} &#8226; {tech2} &#8226; {tech3}
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Card
