import { httpClient } from '../utils/fetch'
import LayoutPageByCategory from '../components/LayoutPageByCategory'

export default function HealthPage({ featuredNews, latestNews }) {
	return (
		<>
			<LayoutPageByCategory
				titlePage={"Health News"}
				featuredNews={featuredNews} 
				latestNews={latestNews} 
			/>
		</>
	)
}

export async function getStaticProps() {

  	const res = await httpClient('/top-headlines?country=us&category=health')

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