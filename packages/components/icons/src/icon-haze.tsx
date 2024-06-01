import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHaze = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h1" />
      <path d="M12 3v1" />
      <path d="M20 12h1" />
      <path d="M5.6 5.6l.7 .7" />
      <path d="M18.4 5.6l-.7 .7" />
      <path d="M8 12a4 4 0 1 1 8 0" />
      <path d="M3 16h18" />
      <path d="M3 20h18" />
    </>
  ),
  displayName: 'IconHaze',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
