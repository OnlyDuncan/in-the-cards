/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.tarotcardmeanings.net']
    },
    env: {
        NEXT_PUBLIC_PROJECT_ID: 'tarot-reading-app-42e6e'
    }
}

module.exports = nextConfig;
