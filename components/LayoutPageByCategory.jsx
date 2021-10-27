import CardArticle from './CardArticle'
import SidebarCard from './SidebarCard'

export default function LayoutPageByCategory({ titlePage, latestNews, featuredNews }) {
	return (
		<>
			<div>
			<h1 className="text-4xl font-bold py-5 px-3">{ titlePage }</h1>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="col-span-2">
					<section className="sm:px-none py-5 px-3 grid gap-5 grid-cols-1 sm:grid-cols-2">
		        {
	          	(latestNews && latestNews.length > 0) ? (
	            	latestNews.map((article, index) => (
              		<CardArticle article={article} key={index} />
	            	))
	          	) : (
	            	<div>
	            		<h5>Not results</h5>
	            	</div>
	          	)
		        }
	      	</section>
				</div>
      	<div className="col-span-2 md:col-span-1 px-3 py-5">
      		{
      			(featuredNews && featuredNews.length > 0) && (
            	featuredNews.map((article, index) => (
            		<SidebarCard article={article} key={index} />
            	))
          	)
      		}
      	</div>
			</div>
		</div>
		</>
	)
}