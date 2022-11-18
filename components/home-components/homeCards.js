import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
function HomeCards() {
	const { scrollYProgress } = useScroll();
	return (
		<section className="home-card-wrap">
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: { opacity: 0, x: -200, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
				}}
				className="card"
			>
				<Image src={'/images/vision.png'} alt="Vision" width={70} height={70} />
				<h1>Our Vision</h1>
				<p>Serve our clients&apos; changing business needs and make them Future-Ready, Now</p>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: { opacity: 0, x: 0, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
				}}
				className="card"
			>
				<Image src={'/images/mission.png'} alt="Mission" width={70} height={70} />
				<h1>Our Mission</h1>
				<p>
					{`At Eminent, our mission is to provide A->Z consulting services so you can focus on your core business while we do the rest for you.`}
				</p>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: { opacity: 0, x: 200, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, x: 0, transition: { delay: 0.3, ease: 'easeInOut' } }
				}}
				className="card"
			>
				<Image src={'/images/solution.png'} alt="Solution" width={70} height={70} />
				<h1>Our Solution</h1>
				<p>Eminent Consulting & Services</p>
			</motion.div>
		</section>
	);
}

export default HomeCards;
