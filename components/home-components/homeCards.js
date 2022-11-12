import { motion, useScroll, useTransform } from 'framer-motion';
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
				<i className="fa-solid fa-magnifying-glass" />
				<h1>Identify The Objectives</h1>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look
					like readable English.
				</p>
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
				<i className="fa-solid fa-user-tie" />
				<h1>Create Useful Personas</h1>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look
					like readable English.
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
				<i className="fa-solid fa-comments-dollar" />
				<h1>Set The Budget</h1>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look
					like readable English.
				</p>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: { opacity: 0, y: 200, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, y: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
				}}
				className="card"
			>
				<i className="fa-solid fa-brain" />
				<h1>Make A Plan</h1>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look
					like readable English.
				</p>
			</motion.div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: { opacity: 0, y: 200, transition: { ease: 'easeInOut' } },
					visible: { opacity: 1, y: 0, transition: { delay: 0.6, ease: 'easeInOut' } }
				}}
				className="card"
			>
				<i className="fa-solid fa-arrow-trend-up" />
				<h1>Plan Evaluation</h1>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look
					like readable English.
				</p>
			</motion.div>
		</section>
	);
}

export default HomeCards;
