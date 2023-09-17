import localFont from 'next/font/local';

export const interVar = localFont({
  src: [
    {
      path: './SpaceGrotesk-Medium.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './SpaceGrotesk-Bold.ttf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './SpaceGrotesk-VariableFont_wght.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  fallback: ['system-ui', 'sans-serif'],
  display: 'swap',
});
