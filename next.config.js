/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    output: "export",
    swcMinify: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
