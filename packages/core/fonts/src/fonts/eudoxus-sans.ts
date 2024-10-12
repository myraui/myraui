// eslint-disable-next-line @typescript-eslint/no-var-requires
const localFont = require('next/font/local').default;

export const eudoxusSans = localFont({
  src: [
    {
      path: '../assets/EudoxusSans/EudoxusSans-ExtraLight.woff2',
      style: 'normal',
      weight: '200',
    },
    {
      path: '../assets/EudoxusSans/EudoxusSans-Light.woff2',
      style: 'normal',
      weight: '300',
    },
    {
      path: '../assets/EudoxusSans/EudoxusSans-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../assets/EudoxusSans/EudoxusSans-Medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../assets/EudoxusSans/EudoxusSans-Bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../assets/EudoxusSans/EudoxusSans-ExtraBold.woff2',
      style: 'normal',
      weight: '800',
    },
  ],
});
