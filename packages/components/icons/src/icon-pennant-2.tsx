import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPennant2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 21h-4" />
      <path d="M14 21v-18" />
      <path d="M14 4l-9 4l9 4" />
    </>
  ),
  displayName: 'IconPennant2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
