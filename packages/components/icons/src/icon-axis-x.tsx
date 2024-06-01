import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAxisX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 13v.01" />
      <path d="M4 9v.01" />
      <path d="M4 5v.01" />
      <path d="M17 20l3 -3l-3 -3" />
      <path d="M4 17h16" />
    </>
  ),
  displayName: 'IconAxisX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
