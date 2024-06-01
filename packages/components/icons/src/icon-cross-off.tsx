import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCrossOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 12h3v-4h-5v-5h-4v3m-2 2h-3v4h5v9h4v-7" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconCrossOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
