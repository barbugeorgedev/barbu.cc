import Link from 'next/link'

const Category = ({ category }) => {

  return (
    <Link href={`/blog/category/${category.attributes.slug}`}>
      <a className="mr-4 rounded-full bg-slate-100 px-3 py-1 text-[12px] uppercase text-primary-500 no-underline hover:text-primary-600 dark:bg-neutral-700 dark:text-secondary-400 dark:hover:text-secondary-500">
          {category.attributes.name}
      </a>
    </Link>
  )
}

export default Category
