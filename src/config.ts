import type { SiteConfig } from '@site-types';

const config: SiteConfig = {
  author: 'Dhruv Sharma',
  title: 'Dhruv Sharma',
  description: 'My personal website and blog',
  pages: [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ],
};

export default config;
