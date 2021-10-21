import Image from 'next/image'

export default function CardArticle({ article }) {
	return (
		<article className="w-full bg-white shadow-md border border-gray-200 rounded-lg">
            <a target="_blank" href={article.url}>
              	<img 
	                className="w-full h-48 object-cover rounded" 
	                src={ article.urlToImage }
	                alt={article.title}
              	/>
            </a>
            <div className="p-5">
              	<p className="mb-3 text-xs font-semibold tracking-wide uppercase">
	                <a target="_blank" href={article.url} className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
	                  { article.source.name }
	                </a>
                	<span className="text-gray-600"> — { article.publishedAt }</span>
              	</p>
              	<a target="_blank" href={article.url} >
	                <h6 className="text-gray-900 font-bold text-base tracking-tight mb-2 h-12 overflow-hidden">
	                  	{ article.title }
	                </h6>
              	</a>
              	<p className="font-normal text-sm text-gray-700 mb-3 h-14 overflow-hidden">
                	{ article.description }
              	</p>
              	<a target="_blank" href={article.url} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                	Read more
              	</a>
            </div>
        </article>
	)
}