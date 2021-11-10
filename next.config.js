module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://newsapi.org/:path*', // Matched parameters can be used in the destination
      },
    ]
  },
}
