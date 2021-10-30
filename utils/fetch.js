const apiKey = process.env.NEXT_PUBLIC_API_KEY
const url = process.env.NEXT_PUBLIC_API_URL

export const httpClient = async (endpoint) => {

	try {
		
		const res = await fetch(url + endpoint, {
			method: 'GET',
			headers: {
      			'Authorization': apiKey
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