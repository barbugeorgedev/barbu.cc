import Link from 'next/link'
import Image from '@components/Image'

const Author = ({ authorDetails }) => {

  return (
    <div className="flex flex-col items-center justify-between sm:flex-row space-y-1 border-b border-t border-gray-200 text-center dark:border-gray-700">
    <div>
        <dl className="py-8 xl:py-10">
        <dt className="sr-only">Authors</dt>
        <dd>
            <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
            <li className="flex items-center space-x-2">
                <span>
                {authorDetails.avatar && (
                    <Image
                        src={authorDetails.avatar.data.attributes.url}
                        width="38px"
                        height="38px"
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                    />
                    )}
                </span>
                <dl className="whitespace-nowrap text-base font-medium leading-5">
                <dt className="sr-only">Name</dt>
                <dd className="text-gray-900 dark:text-gray-100">{authorDetails.name}</dd>
                <dt className="sr-only">Linkedin</dt>
                <dd>
                    {authorDetails.linkedin && (
                    <Link
                        href={authorDetails.linkedin.replace('@', 'https://www.linkedin.com/in/')}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                        {authorDetails.linkedin}
                    </Link>
                    )}
                </dd>
                </dl>
            </li>
            </ul>
        </dd>
        </dl>
    </div>
    <div className="py-0 pb-6 text-sm text-gray-700 dark:text-gray-300 sm:py-6">
        <div className="flex space-x-2 md:space-x-4">
        <button aria-label="Tweet via Twitter" type="button" className="flex items-center rounded-md bg-gray-200 px-2 py-2 text-sm text-blue-400 transition-all hover:bg-gray-300 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4">
            Tweet </button>
        <button aria-label="Share on Facebook" type="button" className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-blue-400 transition-all hover:bg-gray-300 hover:text-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4">
            Share </button>
        <a target="_blank" rel="noopener noreferrer" className="flex items-center rounded-md bg-gray-200 py-2 px-2 text-sm text-violet-400 transition-all hover:bg-gray-300 hover:text-violet-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-gray-300 md:px-4" href="https://discord.gg/s9gNUr3F9y">
            Discord </a>
        </div>
    </div>
    </div>
  )
}

export default Author
