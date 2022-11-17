import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { useRouter } from 'next/router';
function AboutUs() {
	useEffect(() => {
		AOS.init();
	});
	const router = useRouter();
	return (
		<section
			data-aos="fade-right"
			data-aos-offset="0"
			data-aos-delay="50"
			data-aos-duration="500"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-center"
			className="aboutUs-con"
			id="about"
		>
			<aside className="about-content-section">
				<h1>
					<span className="dash" /> ABOUT US
				</h1>
				<h2>
					We Are Experts In Our Field<span className="dot">.</span>
				</h2>
				<ul>
					<li>
						One-of-a-kind service is what we strive to offer. Since we don&apos;t stop working until the job
						is done, our quality represents our commitment to our clients.
					</li>
					<li>
						We bring to the table a diverse range of talented & experienced individuals, who are all ready
						to serve & satisfy our clients in the best possible way.
					</li>
					<li>
						From digital marketing to business innovation and web solutions for business scalability, our
						expert panel will help you achieve your goals in the most efficient and cost-effective manner.
					</li>
				</ul>
				<button className="contact-us-btn" onClick={() => router.push('/contact')}>
					Contact Us
				</button>
			</aside>
		</section>
	);
}

export default AboutUs;
