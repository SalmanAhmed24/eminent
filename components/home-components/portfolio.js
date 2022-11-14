import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Portfolio() {
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
					Our Latest Project<span className="dot">.</span>
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
				<div className="port-sec-wrap">
					<motion.img
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, x: -200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
						}}
						src="/images/port1.png"
					/>
					<motion.img
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, x: -200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
						}}
						src="/images/port3.png"
					/>
					<motion.img
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, x: -200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
						}}
						src="/images/port5.png"
					/>
					<motion.img src="/images/port6.png" />
				</div>
				<div className="port-sec2-wrap">
					<motion.img
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, x: 200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
						}}
						src="/images/port2.png"
					/>
					<motion.img
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, x: 200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
						}}
						src="/images/port4.png"
					/>
					<motion.img
						initial="hidden"
						whileInView="visible"
						variants={{
							hidden: { opacity: 0, x: 200, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
						}}
						src="/images/port7.png"
					/>
				</div>
			</section>
		</section>
	);
}

export default Portfolio;
