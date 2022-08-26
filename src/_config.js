export const process = { dev: true };

export const links = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/about',
    label: 'About',
  },
];

export const app = {
  title: process.dev ? 'DEV' : 'PROD',
};

export const tags = [
  { label: 'critical', color: '#ff5447' },
  { label: 'work', color: '#ff943d' },
  { label: 'home', color: '#63be7c' },
  { label: 'hobby', color: '#3d81ff' },
];

export const defaultTag = { label: 'default', color: '#dddddd' };
