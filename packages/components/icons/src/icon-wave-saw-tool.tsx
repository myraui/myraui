import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWaveSawTool = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h5l4 8v-16l4 8h5" />
    </>
  ),
  displayName: 'IconWaveSawTool',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
