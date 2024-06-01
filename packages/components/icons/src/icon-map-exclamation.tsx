import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMapExclamation = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v8.5" />
      <path d="M9 4v13" />
      <path d="M15 7v13" />
      <path d="M19 16v3" />
      <path d="M19 22v.01" />
    </>
  ),
  displayName: 'IconMapExclamation',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
