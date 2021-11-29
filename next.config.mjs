// ----------------------------------------------------------------------

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
  },
  env: {
    DEV_API: 'http://localhost:8888',
    PRODUCTION_API: '',
    GOOGLE_API: '',
  },
  images: {
    domains: ['flagcdn.com'],
  },
  async redirects() {
    return [
      {
        source: '/pages',
        destination: '/marketing',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
