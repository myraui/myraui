import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBookDownload = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
      <path d="M13 16h-7a2 2 0 0 0 -2 2" />
      <path d="M15 19l3 3l3 -3" />
      <path d="M18 22v-9" />
    </>
  ),
  displayName: 'IconBookDownload',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
