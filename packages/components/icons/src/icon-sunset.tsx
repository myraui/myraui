import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSunset = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
      <path d="M3 21l18 0" />
      <path d="M12 3v6l3 -3m-6 0l3 3" />
    </>
  ),
  displayName: 'IconSunset',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
