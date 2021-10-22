import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<>
			<Header />

			<main className="w-full md:w-5/6 mx-auto mt-4">
				{ children }
			</main>

			<Footer />
		</>
	)
}