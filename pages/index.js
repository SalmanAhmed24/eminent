import Head from 'next/head';
import Image from 'next/image';
import AboutUs from '../components/home-components/aboutUs';
import HomeCards from '../components/home-components/homeCards';
import HomeHeader from '../components/home-components/homeHeader';
import Script from 'next/script';
import Services from '../components/home-components/services';
import Portfolio from '../components/home-components/portfolio';
import Testimonials from '../components/home-components/testimonials';

export default function Home() {
	return (
		<div className="home-con">
			<Script src="https://kit.fontawesome.com/d13d7ebb7d.js" crossOrigin="anonymous" async />
				{/* for google */}
				<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-SCGZTWCNTC`} />
            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());
                `}
            </Script>
			<Head>
				<title>Eminent</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/images/cropped-favicon-eminent-32x32.png" />
				
			</Head>
			<HomeHeader />
			<HomeCards />
			<AboutUs />
			<Services />
			<Portfolio />
			<Testimonials />
		</div>
	);
}
