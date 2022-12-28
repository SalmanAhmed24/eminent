import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import axios from 'axios';
import Head from 'next/head';
function ContactPage() {
	const options = [
		{ value: 'Digital Marketing Solutions', label: 'Digital Marketing Solutions' },
		{ value: 'Project Management', label: 'Project Management' },
		{ value: 'Business Process Outsourcing', label: 'Business Process Outsourcing' },
		{ value: 'Software & Website Development', label: 'Software & Website Development' }
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
	const handleSub = (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			phone,
			service,
			message: msg
		};
		console.log(data);
		axios
			.post('https://www.eminentconsultingandservices.com/api/mail', data)
			.then((res) => console.log(res))
			.catch((error) => console.log(error));
	};
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
			<Head>
				<title>Eminent | Contact</title>
				<meta name="description" content="Contact Us Form" />
				<link rel="icon" href="/images/cropped-favicon-eminent-32x32.png" />
			</Head>
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
				<motion.form
					initial="hidden"
					animate="visible"
					onSubmit={handleSub}
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
						<button type={'submit'}>Submit</button>
					</div>
				</motion.form>
			</header>
			<section className="phone-con">
				<div className="card-phone">
					<Image src="/images/placeholder.png" width={70} height={70} alt="Location" />
					<p>ARL Residential Estate, Morgah Rawalpindi</p>
				</div>
				<a href="tel:+923150204448">
					<div className="card-phone">
						<Image src="/images/telephone.png" width={70} height={70} alt="Phone" />
						<p>Pakistan +92 (315) 0204448</p>
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
