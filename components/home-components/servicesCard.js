import Image from 'next/image';
function ServicesCard() {
	return (
		<section className="services-card-con">
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/ui.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>UI/UX Design</h1>
				<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
			</div>
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/web-dev.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Development</h1>
				<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
			</div>
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/web-design.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Visual Design</h1>
				<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
			</div>
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/brand.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Brand Identity</h1>
				<p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.</p>
			</div>
		</section>
	);
}

export default ServicesCard;
