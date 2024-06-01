import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandVercel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19h18l-9 -15z" />
    </>
  ),
  displayName: 'IconBrandVercel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
