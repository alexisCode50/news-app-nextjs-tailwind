import { useDateFormat } from '../helpers/date'

export default function SidebarCard({ article }) {

	const { customDate } = useDateFormat()

	return (
		<>
			<div className="max-w-md mx-auto bg-white rounded-xl shadow overflow-hidden md:max-w-2xl mb-3">
			  	<div className="md:flex">
			    	<div className="md:flex-shrink-0">
			      		<img 
			      			className="w-24 h-24 object-cover" 
			      			src={ article.urlToImage }
			      			alt={ article.title }
		      			/>
			   		</div>
				    <div className="p-2">
				      	<p className="tracking-wide text-sm text-black-500 font-semibold">
				      		{ article.source.name } — { customDate(article.publishedAt) }
				      	</p>
				      	<a target="_blank" href={article.url} className="block mt-1 text-sm leading-tight font-medium text-black h-14 overflow-hidden">
				      		{ article.title }
			      		</a>
				    </div>
			  	</div>
			</div>
		</>
	)
}