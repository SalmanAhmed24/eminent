import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
function Testimonials() {
	useEffect(() => {
		AOS.init();
	});
	return (
		<main
			data-aos="fade-in"
			data-aos-offset="0"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-center"
			className="testimonials-sec"
		>
			<section className="test-con">
				<h1 className="testSubHead">
					<span className="dash" />Testimonials
				</h1>
				<h1 className="testMainHead">
					What Clients Say<span className="dot">.</span>
				</h1>
			</section>
			<section className="test-card-wrap">
				<div className="cards">
					<div className="avatar-wrap">
						<Image src="/images/avatar.jpg" width={80} height={80} />
						<div className="avatarInfoWrap">
							<h1>MS Malik & Co</h1>
							<p>Tax Consultant</p>
						</div>
						<p>
							Highlight of the story is that I wasn&apos;t generating leads for my startup at all. If you
							are running a business or startup, social media marketing is very important in order to
							generate leads/profits and that&apos;s what Eminent did for me. Their content writing,
							posting, color schemes, marketing campaigns and above all professionalism is really worth
							appreciating. On average I am getting ten to fifteen leads per day from the last two months.
							So, I would highly recommend Eminent for consultation and services. Keep Rocking Guys!!
							Muhammad Saad.
						</p>
					</div>
				</div>
				{/* <div className="cards">
					<div className="avatar-wrap">
						<Image src="/images/avatar.jpg" width={80} height={80} />
						<div className="avatarInfoWrap">
							<h1>Client One</h1>
							<p>Designer</p>
						</div>
						<p>
							In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
							demonstrate the visual form of a document or a typeface without relying on meaningful
							content. Lorem ipsum may be used as a placeholder before final copy is available.
						</p>
					</div>
				</div> */}
			</section>
		</main>
	);
}

export default Testimonials;
