import Image from 'next/image';
function Navbar() {
	return (
		<nav className="navbar">
			<Image src="/images/logo.png" width={150} height={45} alt="Eminent" />
			<Image src="/images/bar.png" width={40} height={30} alt="Menu" />
		</nav>
	);
}

export default Navbar;
