/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dawid-food-ordering.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sottopizza.nl',
      },
      {
        protocol: 'https',
        hostname: 'www.dominos.co.in',
      },
      {
        protocol: 'https',
        hostname: 'www.mcdonalds.com',
      },
      {
        protocol: 'https',
        hostname: 'www.comicbook.com.',
      },
      {
        protocol: 'https',
        hostname: 'www.slimmingeats.com',
      },
      {
        protocol: 'https',
        hostname: 'www.simplyscratch.com',
      },
      {
        protocol: 'https',
        hostname: 'www.licious.in',
      },
      {
        protocol:'https',
        hostname:'www.thecookingcollective.com.au'
      },
      {
        protocol:'https',
        hostname:'www.recipetineats.com'
      },
      {
        protocol:'https',
        hostname:'www.bakewithshivesh.com'
      },
      {
        protocol:'https',
        hostname:'www.sugargeekshow.com'
      },

      
    ]
  }
}

module.exports = nextConfig
