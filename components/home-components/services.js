import ServicesCard from './servicesCard';

function Services() {
	return (
		<main className="services-con">
			<section className="info-con">
				<h1 className="servicesSubHead">
					<span className="dash" />Services
				</h1>
				<h1 className="servicesMainHead">
					We Do Everything<span className="dot">.</span>
				</h1>
				<p>Let us help you develop the perfect brand strategy from scratch</p>
			</section>
			<ServicesCard />
		</main>
	);
}

export default Services;
