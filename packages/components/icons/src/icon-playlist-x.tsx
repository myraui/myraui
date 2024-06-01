import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlaylistX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 8h-14" />
      <path d="M5 12h7" />
      <path d="M12 16h-7" />
      <path d="M16 14l4 4" />
      <path d="M20 14l-4 4" />
    </>
  ),
  displayName: 'IconPlaylistX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
