import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber1 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 20v-16l-5 5" />
    </>
  ),
  displayName: 'IconNumber1',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
