/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: '/gioithieu',
        destination: '/ve-chung-toi',
      },
      {
        source: '/gioithieu/',
        destination: '/ve-chung-toi',
      },
      {
        source: '/tintuc',
        destination: '/tin-tuc',
      },
      {
        source: '/tintuc/',
        destination: '/tin-tuc',
      },
      {
        source: '/dichvu',
        destination: '/dich-vu',
      },
      {
        source: '/dichvu/',
        destination: '/dich-vu',
      },
      {
        source: '/dichvu/:slug',
        destination: '/dich-vu/:slug',
      },
      {
        source: '/dichvu/:slug/',
        destination: '/dich-vu/:slug',
      },
      {
        source: '/duan',
        destination: '/du-an',
      },
      {
        source: '/duan/',
        destination: '/du-an',
      },
      {
        source: '/duan/:slug',
        destination: '/du-an/:slug',
      },
      {
        source: '/duan/:slug/',
        destination: '/du-an/:slug',
      },
    ];
  },
};

export default nextConfig;

