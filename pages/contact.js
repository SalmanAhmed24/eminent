import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function ContactPage() {
	const options = [
		{ value: 'Digital Marketing', label: 'Digital Marketing' },
		{ value: 'Website Development', label: 'Website Development' },
		{ value: 'Software Development', label: 'Software Development' },
		{ value: 'BPO', label: 'BPO' },
		{ value: 'Project Management', label: 'Project Management' }
	];
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ service, setService ] = useState('');
	const [ msg, setMsg ] = useState('');
	const handleName = (e) => setName(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handlePhone = (e) => setPhone(e.target.value);
	const handlerServices = (e) => setService(e.value);
	const handlerMessage = (e) => setMsg(e.target.value);

	const colourStyles = {
		control: (styles) => ({ ...styles, backgroundColor: '#fff' }),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				backgroundColor: isDisabled ? undefined : isSelected ? '#19bdf0' : isFocused ? '#19bdf0' : undefined,
				color: isDisabled ? '#ccc' : isSelected ? 'white' : 'black',
				cursor: isDisabled ? 'not-allowed' : 'default',

				':active': {
					...styles[':active'],
					backgroundColor: !isDisabled ? (isSelected ? '#19bdf0' : '#19bdf0') : undefined
				}
			};
		}
	};
	return (
		<section>
			<header className="contact-con">
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, x: 0, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, x: 0, transition: { delay: 1.03, ease: 'easeInOut' } }
					}}
				>
					Get In Touch
				</motion.h1>
				<motion.p
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 100, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, y: 0, transition: { delay: 1.045, ease: 'easeInOut' } }
					}}
				>
					Feel Free to contact us for any of the services we offer.
				</motion.p>
				<motion.section
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 0, transition: { ease: 'easeInOut' } },
						visible: { opacity: 1, y: 0, transition: { delay: 1.06, ease: 'easeInOut' } }
					}}
					className="formWrap"
				>
					<div className="singleInpWrap">
						<label>Name</label>
						<input type={'text'} required="true" onChange={handleName} className="singleInp" />
					</div>
					<div className="singleInpWrap">
						<label>Email</label>
						<input type={'email'} required="true" onChange={handleEmail} className="singleInp" />
					</div>
					<div className="singleInpWrap">
						<label>Phone</label>
						<input type={'number'} required="true" onChange={handlePhone} className="singleInp" />
					</div>
					<div className="singleInpWrap">
						<label>Services</label>
						<Select
							styles={colourStyles}
							className="dropdown"
							options={options}
							onChange={handlerServices}
							required={true}
						/>
					</div>
					<div className="singleInpWrap" style={{ marginTop: 20 }}>
						<label>Message (Optional)</label>
						<textarea onChange={handlerMessage} cols="30" rows="10" className="message" />
					</div>
					<div className="sub-btn-wrap">
						<button>Submit</button>
					</div>
				</motion.section>
			</header>
			<section className="phone-con">
				<div className="card-phone">
					<Image src="/images/placeholder.png" width={70} height={70} alt="Location" />
					<p>ARL Residential Estate, Morgah Rawalpindi</p>
				</div>
				<a href="tel:+923165407849">
					<div className="card-phone">
						<Image src="/images/telephone.png" width={70} height={70} alt="Phone" />
						<p>Pakistan +92 (316) 540-7849</p>
					</div>
				</a>
				<a href="tel:+18577722573">
					<div className="card-phone">
						<Image src="/images/telephone.png" width={70} height={70} alt="Phone" />
						<p>USA +1 (857) 772-2573</p>
					</div>
				</a>
				<a href="mailTo:support@eminentconsultingandservices.com">
					<div className="card-phone">
						<Image src="/images/email.png" width={70} height={70} alt="Phone" />
						<p>support@eminentconsultingandservices.com</p>
					</div>
				</a>
			</section>
		</section>
	);
}

export default ContactPage;
