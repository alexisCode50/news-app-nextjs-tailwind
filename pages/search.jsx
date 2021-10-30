import { useState } from 'react'
import { useRouter } from 'next/router'
import CardArticle from '../components/CardArticle'

export default function SearchPage() {

	const router = useRouter()
	const [articles, setActicles] = useState([])
	const { keyword } = router.query

	// const getPosts = async () => {
	// 	const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=e287411c9ae64bbdbbbdc12b88e0a2c3`
	// 	const res = await fetch(url)
	// 	const posts = await res.json()

	// 	if (posts) {
	// 		setActicles(posts.articles)
	// 	}
	// }

	// getPosts()

	return (
		<>
			<h1 className="text-4xl font-bold py-5 px-3">
				Results: { keyword }
			</h1>

			<section className="py-5 px-3 sm:px-none grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		        {
		          (articles && articles.length > 0) ? (
		            articles.map((article, index) => (
		              <CardArticle article={article} key={index} />
		            ))
		          ) : (
		            <div>
		              <h5>Not results</h5>
		            </div>
		          )
		        }
		    </section>
		</>
	)
}