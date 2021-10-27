import LayoutPageByCategory from '../components/LayoutPageByCategory'

export default function BusinessPage({ featuredNews, latestNews }) {
	return (
		<>
			<LayoutPageByCategory
				titlePage={"Sports News"}
				featuredNews={featuredNews} 
				latestNews={latestNews} 
			/>
		</>
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