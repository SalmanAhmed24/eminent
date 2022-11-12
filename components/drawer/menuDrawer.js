import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

function MenuDrawer({ openFlag, drawerHandler }) {
	return (
		<Drawer
			PaperProps={{
				sx: { width: '100%' },
				lg: { width: '100%' }
			}}
			anchor={'left'}
			open={openFlag}
			onClose={drawerHandler}
		>
			<div className="drawer-wrap">
				<p className="close-p" onClick={drawerHandler}>
					&#10005;
				</p>
				<div className="drawer-links-wrap">
					<ul className="drawer-links">
						<li>
							<Link onClick={drawerHandler} href={'/'}>
								Home
							</Link>
						</li>
						<li onClick={drawerHandler}>
							<a href="#service">Services</a>
						</li>
						<li onClick={drawerHandler}>
							<a href="#about">About Us</a>
						</li>
						<li onClick={drawerHandler}>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<Link onClick={drawerHandler} href={'/contact'}>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</Drawer>
	);
}

export default MenuDrawer;
