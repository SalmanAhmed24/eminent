import ServicesCard from './servicesCard';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
function Services() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<main
			data-aos="fade-left"
			data-aos-offset="0"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-center"
			className="services-con"
			id="service"
		>
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
