import { useState } from 'react'
import Router from 'next/router'
import { httpClient } from '../utils/fetch'

export default function SearchComponent() {

	
  	const [keyword, setKeyword] = useState('') 

  	const onChange = (event) => {
    	const { value } = event.target

    	setKeyword(value)
  	}

  	const onSubmit = (event) => {
    	event.preventDefault()

		if (keyword.length > 0) {
	  		Router.push({
	        	pathname: '/search',
	        	query: { keyword },
	      	})
		}
	}

	return (
		<>
			<form onSubmit={ onSubmit }>
	            <input
	              	className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none w-full"
	              	type="search" 
	              	name="keyword"
	              	onChange={onChange} 
	              	placeholder="Search" 
	            />
          	</form>
		</>
	)
}