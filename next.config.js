module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/v2/:path*',
        destination: 'https://newsapi.org/:path*', // Matched parameters can be used in the destination
      },
    ]
  },
}
