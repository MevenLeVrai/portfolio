/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    serverExternalPackages: ["@react-email/render"],
};

module.exports = nextConfig;
