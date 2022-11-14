import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
function Footer() {
	const year = new Date().getFullYear();
	const router = useRouter();
	return (
		<footer className="footer-con">
			{router.asPath == '/contact' ? null : (
				<section className="footerWrap">
					<h1>
						Lets Talk <span>?</span>
					</h1>
					<p>
						{`At Eminent, our mission is to provide A->Z consulting services so you can focus on your core
					business while we do the rest for you.`}
					</p>

					<button onClick={() => router.push('/contact')}>Contact Us</button>
				</section>
			)}
			{router.asPath == '/privacy' ? null : (
				<section className="privacy-p">
					<p>
						Visit Our <span onClick={() => router.push('/privacy')}>Privacy Policy</span> for more details.
					</p>
				</section>
			)}
			<section className="footer-social">
				<p>{year} &copy; Copyright made by Salman Ahmed Abbasi </p>
				{/* <div className="icons-social">
					<i className="fa-brands fa-facebook-f" />
					<i className="fa-brands fa-linkedin-in" />
					<i className="fa-brands fa-square-instagram" />
				</div> */}
			</section>
		</footer>
	);
}

export default Footer;
