/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com/dozwseg65'
            }
        ],
        loaderFile: './src/lib/imgLoader.ts'
    }
};

export default nextConfig;
