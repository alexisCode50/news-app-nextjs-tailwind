import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { httpClientSide } from '../utils/fetch'
import CardArticle from '../components/CardArticle'

export default function SearchPage() {

	const router = useRouter()
	const [articles, setActicles] = useState([])
	const { keyword } = router.query

	useEffect(() => {
		
		const initialData = async () => {

			setActicles([])

			const { articles, status } = await httpClientSide(`/search?keyword=${keyword}`)

			if (status) {
				setActicles(articles)
		  	}
		}

		initialData()

	}, [keyword])

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