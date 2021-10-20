import Navbar from './Navbar'
import Footer from './footer'

export default function Layout({ children }) {
	return (
		<>
			<Navbar />

			{ children }

			<Footer />
		</>
	)
}