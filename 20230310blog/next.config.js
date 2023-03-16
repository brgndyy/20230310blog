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
      "f4.bcbits.com",
      "cdnimg.melon.co.kr",
      "i.scdn.co",
      "i.guim.co.uk",
      "media.pitchfork.com",
      "cdns-images.dzcdn.net",
    ],
  },
};

module.exports = nextConfig;
