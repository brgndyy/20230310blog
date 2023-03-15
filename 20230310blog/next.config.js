/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.discogs.com",
      "bonuscut.files.wordpress.com",
      "image.bugsm.co.kr",
      "",
    ],
  },
};

module.exports = nextConfig;
