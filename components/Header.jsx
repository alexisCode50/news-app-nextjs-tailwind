import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SearchComponent from './SearchComponent'

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <div className="hidden md:block w-full text-gray-700 bg-white shadow">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link href="/">
              <a className="text-lg mr-8 font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
                News
              </a>
            </Link>
            <nav className="inline-block">
              <Link href="/technology">
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Technology
                </a>
              </Link>
              <Link href="/business">
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Business
                </a>
              </Link>
              <Link href="/sports">
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Sports
                </a>
              </Link>
              <Link href="/health">
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Health
                </a>
              </Link>
              <Link href="/science">
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Science
                </a>
              </Link>
            </nav>  
          </div>
          <SearchComponent />
        </div>
      </div>

      <div className="block md:hidden w-full pb-4 text-gray-700 bg-white shadow">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link href="/">
              <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
                News
              </a>
            </Link>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {
                  (!open) && (
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  )
                }
                {
                  (open) && (
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  )
                }
              </svg>
            </button>
          </div>
          <nav className={(open) ? 'flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row' : 'hidden flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row'}>
            <Link href="/technology">
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Technology
              </a>
            </Link>
            <Link href="/business">
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Business
              </a>
            </Link>
            <Link href="/sports">
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Sports
              </a>
            </Link>
            <Link href="/health">
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Health
              </a> 
            </Link>
            <Link href="/science">
              <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                Science
              </a> 
            </Link>
          </nav>
          <SearchComponent />
        </div>
      </div>
    </>
  )
}