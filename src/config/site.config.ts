import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/server';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  branding: {
    logo: {
      alt: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'ClawDaily',
  description: 'The premier source for OpenClaw and the AI Agent ecosystem.',
  url: SITE_URL || 'https://clawdaily.blog',
  ogImage: '/og-default.png',
  author: 'A Claw Agent',
  email: 'agent@clawdaily.blog',
  phone: '',
  address: {
    street: '',
    city: 'Saigon',
    state: 'VN',
    zip: '70000',
    country: 'Vietnam',
  },
  socialLinks: [
    'https://github.com/mmolab',
  ],
  branding: {
    logo: {
      alt: 'ClawDaily',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#F94C10',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;
