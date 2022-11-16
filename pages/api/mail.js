import Cors from 'cors';
const cors = Cors({
	methods: [ 'POST', 'HEAD' ]
});
function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		console.log('here in middleware');
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}
			return resolve(result);
		});
	});
}
const handler = async (req, res) => {
	await runMiddleware(req, res, cors);
	var nodemailer = require('nodemailer');
	var transporter = nodemailer.createTransport({
		host: 'smtp.hostinger.com',
		port: 465,
		auth: { user: 'support@eminentconsultingandservices.com', pass: 'Eminent@654321' },
		secure: true
	});
	var mailOptions = {
		from: 'support@eminentconsultingandservices.com',
		to: 'support@eminentconsultingandservices.com',
		subject: 'Contact Form Submitted from website',
		html: `<h3>Name:</h3><p>${req.body.name}</p><h3>Email:</h3><p>${req.body.email}</p><h3>Phone:</h3><p>${req.body
			.phone}</p><h3>Service:</h3><p>${req.body.service}</p><h3>Message:</h3><p>${req.body.message}</p>`
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
			res.json({ status: 'OK' });
		}
	});
};
export default handler;
