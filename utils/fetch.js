const newApiKey = process.env.NEXT_PUBLIC_API_KEY
const newsApiUrl = process.env.NEXT_PUBLIC_API_URL
const newsUrlServer = process.env.NEXT_PUBLIC_API_URL_SERVER

export const httpClient = async (endpoint) => {

	try {
		
		const res = await fetch(newsApiUrl + endpoint, {
			method: 'GET',
			headers: {
      			'Authorization': newApiKey
    		}
		})

		const data = await res.json()

		return {
			data: data.articles,
			status: true,
		}

	} catch(e) {
		return {
			data: [],
			status: false
		}
	}

}

export const httpClientSide = async (endpoint) => {

	try {
		
		const res = await fetch(newsUrlServer + endpoint)

		const { articles } = await res.json()

		return {
			articles,
			status: true,
		}

	} catch(e) {
		return {
			articles: [],
			status: false
		}
	}

}