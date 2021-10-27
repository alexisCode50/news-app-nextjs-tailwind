import Carousel from '../components/Carousel'
import CardArticle from '../components/CardArticle'
import Featured from '../components/Featured'
import Team from '../components/Team'

export default function HomePage({ featuredNews, latestNews }) {

  return (
    <>

      <Carousel articles={featuredNews} />

      <h1 className="text-center text-4xl font-bold py-5">Daily News</h1>

      <section className="py-5 px-3 sm:px-none grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {
          (latestNews && latestNews.length > 0) ? (
            latestNews.map((article, index) => (
              <CardArticle article={article} key={index} />
            ))
          ) : (
            <div>
              <h5>Not results</h5>
            </div>
          )
        }
      </section>

      <Featured articles={featuredNews} />

      <Team />
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e287411c9ae64bbdbbbdc12b88e0a2c3`)
  const posts = await res.json()

  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const featuredNews = []
  const latestNews = []

  posts.articles.map((article, index) => {
    if (index % 2 === 0) {
      featuredNews.push(article)
    } else {
      latestNews.push(article)
    }
  })

  return {
    props: { 
      featuredNews, 
      latestNews 
    },
  }
}

