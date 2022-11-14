import Image from 'next/image';
function ServicesCard() {
	return (
		<section className="services-card-con">
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/DM.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Digital Marketing Solutions</h1>
				<p>
					Targeting the right audience is essential in growing a business. Our team of experts will devise
					tailored marketing strategies to suit the specific needs of your brand. This will help to keep your
					followers engaged and simultaneously attract potential customers.
				</p>
			</div>
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/PM.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Project Management</h1>
				<p>
					Keep your organization's most strategic projects on time and on budget, to keep your employees
					learning and focused, and to keep accelerating your project management success no matter what the
					environment. Our team is experienced in Agile and Waterfall methodologies.
				</p>
			</div>
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/outsourcing.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Business Process Outsourcing</h1>
				<p>
					For any business to thrive, it is important that all it's aspects function at the same pace. More
					than often, a growing business does not have enough manpower or the resources to do so. Eminent
					offers the benefit of outsourcing any or multiple functions for your business.
				</p>
			</div>
			<div className="cards-services">
				<div className="icon-box">
					<Image src="/images/web-dev.png" width={60} height={60} alt="UI/UX" />
				</div>
				<h1>Software & Website Development</h1>
				<p>
					We create Software specifically for your needs. We handle every step of the development process,
					from product concept and coding to testing, deployment, and support. Eminent's Software Development
					team is here to meet your business requirements.
				</p>
			</div>
		</section>
	);
}

export default ServicesCard;
