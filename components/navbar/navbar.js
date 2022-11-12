import Image from 'next/image';
import MenuDrawer from '../drawer/menuDrawer';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
function Navbar() {
	const [ drawerFlag, setDrawerFlag ] = useState(false);
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const toggleDrawer = () => {
		setDrawerFlag(!drawerFlag);
	};
	return (
		<motion.nav
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0, y: -100, transition: { ease: 'easeInOut' } },
				visible: { opacity: 1, y: 0, transition: { delay: 1, ease: 'easeInOut' } }
			}}
			className={scrollPosition < 100 ? 'navbar' : 'navbar fixedNavbar'}
		>
			<Image src="/images/logo.png" width={150} height={45} alt="Eminent" />
			<Image className="bar" onClick={toggleDrawer} src="/images/bar.png" width={40} height={30} alt="Menu" />
			<MenuDrawer openFlag={drawerFlag} drawerHandler={toggleDrawer} />
		</motion.nav>
	);
}

export default Navbar;
