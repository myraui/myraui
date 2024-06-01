import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBandage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 12l0 .01" />
      <path d="M10 12l0 .01" />
      <path d="M12 10l0 .01" />
      <path d="M12 14l0 .01" />
      <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
    </>
  ),
  displayName: 'IconBandage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
