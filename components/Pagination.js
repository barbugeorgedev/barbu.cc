import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage, route }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  const routes = (route) => {
      const routes = (typeof route !== 'undefined') ? ('param' in route) ? route : '' : '';
      return {
          blog: (currentPage - 1 === 1 ? `/blog/` : `/blog/page/`),
          category: (currentPage - 1 === 1 ? `/blog/category/${routes.param}` : `/blog/category/${routes.param}/page/`),
      }
  }

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto block disabled:opacity-50" disabled={!prevPage}>
            <span className="hidden">Previous</span>
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `${routes(route)[route.name]}` : `${routes(route)[route.name]}${currentPage - 1}`}>
            <button rel="previous">Previous</button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            <span className="hidden">Next</span>
          </button>
        )}
        {nextPage && (
          <Link href={`${routes(route)[route.name]}${currentPage + 1}`}>
            <button rel="next">Next</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
