/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://www.eminentconsultingandservices.com/:path*'
			}
		];
	}
};

module.exports = nextConfig;
