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
      "www.artinsight.co.kr",
      "blog.lgchem.com",
      "th4.tmon.kr",
      "upload.wikimedia.org",
      "mblogthumb-phinf.pstatic.net",
      "t1.daumcdn.net",
      "www.dentin.kr",
      "image.yes24.com",
      "i.pinimg.com",
      "www.mmca.go.kr",
    ],
  },
};

module.exports = nextConfig;
