import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import CardArticle from '../components/CardArticle'

export default function Home({ featuredNews, latestNews }) {

  return (
    <div>
      <Head>
        <title>News</title>
      </Head>

      <Navbar />

      <Carousel articles={featuredNews} />

      <section className="w-full px-4 sm:px-none py-5 md:w-5/6 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
  )
}

export async function getStaticProps() {

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e287411c9ae64bbdbbbdc12b88e0a2c3`)
  const posts = await res.json()

  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const featuredNews = []
  const latestNews = []

  posts.articles.map((article, index) => {
    if (index % 2 === 0) {
      featuredNews.push(article)
    } else {
      latestNews.push(article)
    }
  })

  return {
    props: { 
      featuredNews, 
      latestNews 
    },
  }
}

