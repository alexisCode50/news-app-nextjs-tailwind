import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchPage() {

	const router = useRouter()
	const [articles, setActicles] = useState([])
	const { keyword } = router.query

	return (
		<>
			<h1>Results: { keyword }</h1>
		</>
	)
}