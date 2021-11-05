import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

// install Swiper modules


export default function Carousel({ articles }) {

	useEffect(() => {
		SwiperCore.use([Autoplay]);
	}, [])

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
				        className="mySwiper w-full"
			       	>
			    		{
		    				articles.map((article, index) => (
								<SwiperSlide key={index}>
						          	<div 
						              	className="text-white py-24 px-10" 
						              	style={{
						              		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${ article.urlToImage }')`,
						              		backgroundRepeat: 'no-repeat',
						              		backgroundSize: 'cover',
						              		height: '400px',
						              		width: '100%',
						              		maxWidth: '100%',
						              	}}
						            >
					              		<div className="md:w-1/2">
							                <p className="text-2xl sm:text-3xl mb-10 leading-none">
							                  	{ article.title } 
							                </p>
							                <a target="_blank" href={article.url} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
							                  	Read more
							                </a>
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