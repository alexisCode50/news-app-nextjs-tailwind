import { useState, useEffect } from 'react'

const url = process.env.URL_NEWS_API
const apiKey = process.env.NEWS_API_URL

export const useHttpClient = async (endpoint) => {

	const [articles, setArticles] = useState([])
	const [status, setStatus] = useState(false)

	

	useEffect(() => {

		const get = async () => {

			try {
			
				const res = await fetch(url + endpoint, {
					method: 'GET',
					headers: {
		      			'Content-Type': 'application/json',
		      			'Authorization': apiKey
		    		}
				})

				const data = await res.json()

				setArticles(data.articles)
				setStatus(true)

			} catch(e) {
				setArticles([])
				setStatus(false)
			}

		}

		get()

	}, [])

	return {
		articles,
		status
	}

}