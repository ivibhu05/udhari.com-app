/** @type {import('next').NextConfig} */
const nextConfig =  {
    reactStrictMode: true,
    // Add the following configuration
    async redirects() {
      return [
        {
          source: '/api/v1/sign-up', // Replace with your exact endpoint
          destination: 'http://localhost:4000/api/v1/sign-up', // Replace with your backend URL
          permanent: false,
        },
      ];
    },
  };;

export default nextConfig;
