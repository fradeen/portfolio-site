/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio-site',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
            }
        ]
    }
};

export default nextConfig;
