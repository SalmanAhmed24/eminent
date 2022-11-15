import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import '../styles/globals.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
