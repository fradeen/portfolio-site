/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com/dozwseg65'
            }
        ],
        loader: 'custom',
        loaderFile: './src/lib/loader.ts',
    }
};

export default nextConfig;
