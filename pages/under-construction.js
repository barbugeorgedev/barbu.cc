import PageTitle from '@/components/PageTitle'

export async function getStaticProps() {
  return { props: { } }
}

export default function UnderConstruction() {

  return (
    <>
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
    </>
  )
}
