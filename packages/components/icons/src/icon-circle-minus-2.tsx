import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleMinus2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.475 15.029a9 9 0 1 0 -7.962 5.957" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconCircleMinus2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
