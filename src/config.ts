import type { SiteConfig } from '@site-types';

const config: SiteConfig = {
  author: 'Dhruv Sharma',
  title: 'Dhruv Sharma',
  description: 'My personal website and blog',
  pages: [
    {
      title: 'home',
      path: '/',
    },
    {
      title: 'blog',
      path: '/blog',
    },
  ],
};

export default config;
