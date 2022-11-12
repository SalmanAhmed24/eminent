import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import '../styles/globals.scss';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	console.log(router.asPath);
	return (
		<div>
			<Navbar />
			<Component {...pageProps} />
			{router.asPath == '/contact' ? null : <Footer />}
		</div>
	);
}

export default MyApp;
