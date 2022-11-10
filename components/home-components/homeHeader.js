import Image from 'next/image';
function HomeHeader() {
	return (
		<header className="main-header">
			<main className="header-wrap">
				<section className="header-content-wrap">
					<h1>Digital Agency</h1>
					<p>Let&apos;s build your future together with Eminent.</p>
					<div className="header-btnWrap">
						<button>Contact Us</button>
					</div>
				</section>
			</main>
			<section className="header-socialWrap">
				<i className="fa-brands fa-facebook-f" />
				<i className="fa-brands fa-linkedin-in" />
				<i className="fa-brands fa-square-instagram" />
				<div className="scroll-btn-wrap">
					<button className="scroll-btn">Scroll</button>
					<Image className="arrow-img" src="/images/arrow-down.png" width={15} height={100} alt="Down" />
				</div>
			</section>
		</header>
	);
}

export default HomeHeader;
