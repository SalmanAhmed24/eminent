import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
function Portfolio() {
	const [ activeTab, setActiveTab ] = useState('All');
	const handleTabs = (e) => {
		setActiveTab(e.target.innerText);
	};
	return (
		<section className="portfolio-sec">
			<section className="port-con">
				<h1 className="portSubHead">
					<span className="dash" />Portfolio
				</h1>
				<h1 className="portMainHead">
					Our Latest Project<span className="dot">.</span>
				</h1>
				<p>Let us help you develop the perfect brand strategy from scratch</p>
			</section>
			<ul onClick={handleTabs} className="tab-con">
				<li className={activeTab == 'All' ? 'activeTab' : ''}>All</li>
				<li className={activeTab == 'UIUX Design' ? 'activeTab' : ''}>UIUX Design</li>
				<li className={activeTab == 'Development' ? 'activeTab' : ''}>Development</li>
				<li className={activeTab == 'Visual Design' ? 'activeTab' : ''}>Visual Design</li>
				<li className={activeTab == 'Brands Identity' ? 'activeTab' : ''}>Brands Identity</li>
			</ul>
			<div className="circle1" />
			<div className="circle2" />
			<div className="circle3" />
			<section className="portfolio-img-wrap">
				<div className="port-sec-wrap">
					<img src="/images/port1.png" />
					<img src="/images/port3.png" />
					<img src="/images/port5.png" />
					<img src="/images/port6.png" />
				</div>
				<div className="port-sec2-wrap">
					<img src="/images/port2.png" />
					<img src="/images/port4.png" />
					<img src="/images/port7.png" />
				</div>
			</section>
		</section>
	);
}

export default Portfolio;
