import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

// install Swiper modules
SwiperCore.use([Autoplay]);

export default function Carousel({ articles }) {
	return (
		<>
			{
				(articles && articles.length > 0) && (
					<Swiper 
				        spaceBetween={30} 
				        centeredSlides={true} 
				        autoplay={{
				          "delay": 5000,
				          "disableOnInteraction": false
				        }}
				        className="mySwiper w-5/6 sm:w-full"
			       	>
			    		{
		    				articles.map((article, index) => (
								<SwiperSlide key={index}>
						          	<div className="container mx-auto">
							            <div 
							              className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill" 
							              style={{backgroundImage: `url('${ article.urlToImage }')`}}
							            >
						              		<div className="md:w-1/2">
								                <p className="text-3xl mb-10 leading-none">
								                  	{ article.title } 
								                </p>
								                <a target="_blank" href={article.url} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
								                  	Read more
								                </a>
						              		</div>  
						            	</div>
						          	</div>
						        </SwiperSlide>
							))
			    		}  
				    </Swiper>
				)
			}
		</>
	)
}