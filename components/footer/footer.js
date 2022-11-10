function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="footer-con">
			<section className="footerWrap">
				<h1>
					Lets Talk <span>?</span>
				</h1>
				<p>
					In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
					visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be
					used as a placeholder before final copy is available.
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
