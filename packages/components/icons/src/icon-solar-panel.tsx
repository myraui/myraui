import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSolarPanel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.28 14h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" />
      <path d="M4 10h16" />
      <path d="M10 6l-1 8" />
      <path d="M14 6l1 8" />
      <path d="M12 14v4" />
      <path d="M7 18h10" />
    </>
  ),
  displayName: 'IconSolarPanel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
