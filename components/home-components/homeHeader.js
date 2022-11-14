import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
function HomeHeader() {
	const router = useRouter();
	return (
		<header className="main-header">
			<main className="header-wrap">
				<section className="header-content-wrap">
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, x: 0, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 1.03, ease: 'easeInOut' } }
						}}
					>
						Eminent Consulting
					</motion.h1>
					<motion.h1
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, x: 0, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 1.03, ease: 'easeInOut' } }
						}}
					>
						& SERVICES
					</motion.h1>
					<motion.p
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, y: 100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, y: 0, transition: { delay: 1.045, ease: 'easeInOut' } }
						}}
					>
						Let&apos;s build YOUR future together!
					</motion.p>
					<motion.div
						initial="hidden"
						animate="visible"
						variants={{
							hidden: { opacity: 0, x: 100, transition: { ease: 'easeInOut' } },
							visible: { opacity: 1, x: 0, transition: { delay: 1.05, ease: 'easeInOut' } }
						}}
						className="header-btnWrap"
					>
						<button onClick={() => router.push('/contact')}>Contact Us</button>
					</motion.div>
				</section>
			</main>
			<section className="header-socialWrap">
				<motion.img
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, x: -100, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, x: 0, transition: { delay: 1.1, ease: 'easeInOut' } }
					}}
					src="./images/facebook.png"
				/>
				<motion.img
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, x: -100, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, x: 0, transition: { delay: 1.3, ease: 'easeInOut' } }
					}}
					src="./images/linkedIn.png"
				/>
				<motion.img
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, x: -100, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, x: 0, transition: { delay: 1.5, ease: 'easeInOut' } }
					}}
					src="./images/instagram.png"
				/>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: -100, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, y: 0, transition: { delay: 1.7, ease: 'easeInOut' } }
					}}
					className="scroll-btn-wrap"
				>
					<button className="scroll-btn">Scroll</button>
					<Image className="arrow-img" src="/images/arrow-down.png" width={15} height={100} alt="Down" />
				</motion.div>
			</section>
		</header>
	);
}

export default HomeHeader;
