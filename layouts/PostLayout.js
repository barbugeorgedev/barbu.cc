import Link from '@components/Link'
import PageTitle from '@components/PageTitle'
import SectionContainer from '@components/SectionContainer'
import { BlogSEO } from '@components/SEO'
import Category from '@components/blog/Category'
import Author from '@components/blog/Author'
import siteMetadata from '@data/siteMetadata'
import Comments from '@components/comments'
import ScrollTopAndComment from '@components/ScrollTopAndComment'



const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, content }) {
  const { slug, publishedAt, title, categories } = frontMatter.attributes;

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="mt-8 sm:mt-12">
          <header>
            <div className="space-y-1 border-b border-gray-200 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={publishedAt}>
                      {new Date(publishedAt).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{content}</div>
            </div>
            <footer>
              <div className={`flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base  ${(!prev && next ? 'items-end' : 'items-start')}`} >
                {prev && (
                  <div className="px-2 pb-2 xl:pt-8">
                    <Link
                      href={`/blog/${prev.attributes.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.attributes.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="px-2 pb-2 xl:pt-8">
                    <Link
                      href={`/blog/${next.attributes.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.attributes.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>


            <div className='mt-10'>
              <div className="py-10 border-t border-gray-200 text-center dark:border-gray-700">
                <div className="flex flex-wrap">
                  {categories.data.map((category) => (
                    <Category key={category.id} category={category} />
                  ))}
                </div>
              </div>
            </div>


            <Author authorDetails={authorDetails} />
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}