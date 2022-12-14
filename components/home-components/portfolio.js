import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { motion, useScroll, useTransform } from 'framer-motion';

function Portfolio() {
	useEffect(() => {
		AOS.init();
	});
	const [ activeTab, setActiveTab ] = useState('All');
	const { scrollYProgress } = useScroll();
	const handleTabs = (e) => {
		setActiveTab(e.target.innerText);
	};
	return (
		<section className="portfolio-sec" id="portfolio">
			<section className="port-con">
				<h1 className="portSubHead">
					<span className="dash" />Portfolio
				</h1>
				<h1 className="portMainHead">
					Our Latest Projects<span className="dot">.</span>
				</h1>
			</section>
			{/* <ul onClick={handleTabs} className="tab-con">
				<li className={activeTab == 'All' ? 'activeTab' : ''}>All</li>
				<li className={activeTab == 'UIUX Design' ? 'activeTab' : ''}>UIUX Design</li>
				<li className={activeTab == 'Development' ? 'activeTab' : ''}>Development</li>
				<li className={activeTab == 'Visual Design' ? 'activeTab' : ''}>Visual Design</li>
				<li className={activeTab == 'Brands Identity' ? 'activeTab' : ''}>Brands Identity</li>
			</ul> */}
			<div className="circle1" />
			<div className="circle2" />
			<div className="circle3" />
			<section className="portfolio-img-wrap">
				<div
					className="port-sec-wrap"
					data-aos="fade-right"
					data-aos-offset="0"
					data-aos-delay="30"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
				>
					<img src="/images/img-1.jpeg" />
					<img src="/images/img-3.jpeg" />
					<img src="/images/port-4.png" />
					<img src="/images/img-7.png" />
				</div>
				<div
					data-aos="fade-left"
					data-aos-offset="0"
					data-aos-delay="30"
					data-aos-duration="500"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
					className="port-sec2-wrap"
				>
					<img src="/images/img-2.jpeg" />
					<img src="/images/img-5.png" />
					<img src="/images/img-6.png" />
				</div>
			</section>
		</section>
	);
}

export default Portfolio;
