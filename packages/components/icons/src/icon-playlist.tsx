import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlaylist = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M17 17v-13h4" />
      <path d="M13 5h-10" />
      <path d="M3 9l10 0" />
      <path d="M9 13h-6" />
    </>
  ),
  displayName: 'IconPlaylist',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
