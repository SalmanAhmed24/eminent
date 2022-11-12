import React, { useState, useEffect } from 'react';
function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer-con">
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
