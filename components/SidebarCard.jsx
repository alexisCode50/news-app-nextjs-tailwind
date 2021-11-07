import { useDateFormat } from '../hooks/date'

export default function SidebarCard({ article }) {

	const { customDate } = useDateFormat()

	return (
		<>
			<div className="mx-auto bg-white rounded-xl shadow overflow-hidden mb-5">
			  	<div className="flex">
			    	<div className="flex-shrink-0">
			      		<img 
			      			className="w-24 h-full object-cover" 
			      			src={ article.urlToImage }
			      			alt={ article.title }
		      			/>
			   		</div>
				    <div className="p-2">
				      	<p className="tracking-wide text-sm text-black-500 font-semibold">
				      		{ article.source.name } — { customDate(article.publishedAt) }
				      	</p>
				      	<a target="_blank" href={article.url} rel="noopener noreferrer" className="block mt-1 text-sm leading-tight font-medium text-black h-14 overflow-hidden">
				      		{ article.title }
			      		</a>
				    </div>
			  	</div>
			</div>
		</>
	)
}