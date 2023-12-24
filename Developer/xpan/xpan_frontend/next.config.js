/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
    images: {
        unoptimized: true
    },
    trailingSlash: true,
}

module.exports = nextConfig
