import Image from 'next/image';
function Testimonials() {
	return (
		<main className="testimonials-sec">
			<section className="test-con">
				<h1 className="testSubHead">
					<span className="dash" />Testimonials
				</h1>
				<h1 className="testMainHead">
					What Clients Say<span className="dot">.</span>
				</h1>
				<p>Let us help you develop the perfect brand strategy from scratch</p>
			</section>
			<section className="test-card-wrap">
				<div className="cards">
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
				</div>
				<div className="cards">
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
				</div>
			</section>
		</main>
	);
}

export default Testimonials;
