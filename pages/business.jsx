import CardArticle from '../components/CardArticle'
import SidebarCard from '../components/SidebarCard'

export default function BusinessPage({ featuredNews, latestNews }) {
	return (
		<div>
			<h1 className="text-4xl font-bold py-5 px-3">Business News</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="col-span-2">
					<section className="sm:px-none py-5 px-3 grid gap-5 grid-cols-1 sm:grid-cols-2">
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
				</div>
      	<div className="col-span-2 md:col-span-1 px-3 py-5">
      		{
      			(featuredNews && featuredNews.length > 0) && (
            	featuredNews.map((article, index) => (
            		<SidebarCard article={article} key={index} />
            	))
          	)
      		}
      	</div>
			</div>
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