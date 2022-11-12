import React, { useState, useEffect } from 'react';
import AOS from 'aos';
function Footer() {
	const year = new Date().getFullYear();
	useEffect(() => {
		AOS.init();
	});
	return (
		<footer
			className="footer-con"
			data-aos="fade-in"
			data-aos-offset="-100"
			data-aos-delay="50"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
			data-aos-anchor-placement="top-center"
		>
			<section className="footerWrap">
				<h1>
					Lets Talk <span>?</span>
				</h1>
				<p>
					{`At Eminent, our mission is to provide A->Z consulting services so you can focus on your core
					business while we do the rest for you.`}
				</p>

				<button>Contact Us</button>
			</section>
			<section className="footer-social">
				<p>{year} &copy; Copyright made by Salman Ahmed Abbasi </p>
				<div className="icons-social">
					<i className="fa-brands fa-facebook-f" />
					<i className="fa-brands fa-linkedin-in" />
					<i className="fa-brands fa-square-instagram" />
				</div>
			</section>
		</footer>
	);
}

export default Footer;
