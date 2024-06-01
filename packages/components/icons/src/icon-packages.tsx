import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPackages = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M2 13.5v5.5l5 3" />
      <path d="M7 16.545l5 -3.03" />
      <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z" />
      <path d="M12 19l5 3" />
      <path d="M17 16.5l5 -3" />
      <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5" />
      <path d="M7 5.03v5.455" />
      <path d="M12 8l5 -3" />
    </>
  ),
  displayName: 'IconPackages',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
