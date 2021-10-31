import { httpClient } from '../utils/fetch'
import LayoutPageByCategory from '../components/LayoutPageByCategory'

export default function SportsPage({ featuredNews, latestNews }) {
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

	const res = await httpClient('/top-headlines?country=us&category=sports')

  	if (!res.status) {
    	return {
	      	redirect: {
	        	destination: '/',
	        	permanent: false,
	      	},
    	}
  	}

  	const featuredNews = []
  	const latestNews = []

  	res.data.map((article, index) => {
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