import Head from 'next/head'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Document</title>
      </Head>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          (posts && posts.articles.length > 0) ? (
            posts.articles.map((article, index) => (
              <article className="card" key={index}>
                <img className="card-img" src={article.urlToImage} />
                <div className="card-info">
                  <span className="text-xs text-opacity-2">{ article.publishedAt }</span>
                  <h4>{ article.title }</h4>
                  <p>
                    { article.description }
                  </p>  
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
      
      {/*<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://picsum.photos/200" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
            <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div>*/}

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

