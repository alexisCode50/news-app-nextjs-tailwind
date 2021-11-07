import { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'

export default function Featured({ articles }) {

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
            className="mySwiper w-5/6 sm:w-full"
          >
            {
              articles.map((article, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white py-6 sm:py-8">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                      <div className="md:h-80 flex flex-col sm:flex-row bg-gray-200 rounded-lg overflow-hidden">
                        <div className="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
                          <img 
                            className="w-full h-full object-cover object-center" 
                            src={ article.urlToImage }
                            alt={ article.title }
                          />
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
                          <h2 className="text-gray-800 md:text-xl lg:text-2xl font-bold mb-4">
                            { article.title } 
                          </h2>
                          <p className="max-w-md text-gray-600 mb-8">
                            { article.description }
                          </p>
                          <div className="mt-auto">
                            <a target="_blank" href={article.url} rel="noopener" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                              Read more
                            </a>
                          </div>
                        </div>
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