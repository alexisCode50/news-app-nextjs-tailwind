import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Document</title>
      </Head>

      <Navbar />

      <section className="w-full px-4 sm:px-none py-5 md:w-5/6 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          (posts && posts.articles.length > 0) ? (
            posts.articles.map((article, index) => (
              <article className="w-full bg-white shadow-md border border-gray-200 rounded-lg" key={index}>
                <a target="_blank" href={article.url}>
                  <img 
                    className="w-full h-48 object-cover rounded" 
                    src={ article.urlToImage }
                    alt={article.title}
                  />
                </a>
                <div className="p-5">
                  <a target="_blank" href={article.url} >
                    <h6 className="text-gray-900 font-bold text-base tracking-tight mb-2 h-12 overflow-hidden">
                      { article.title }
                    </h6>
                  </a>
                  <p className="font-normal text-sm text-gray-700 mb-3 h-14 overflow-hidden">
                    { article.description }
                  </p>
                  <a target="_blank" href={article.url} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                    Read more
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div>
              <h5>Not results</h5>
            </div>
          )
        }
      </section>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e287411c9ae64bbdbbbdc12b88e0a2c3`)
  const posts = await res.json()

  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

