import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRightRhombus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 12h13" />
      <path d="M18 9l3 3l-3 3" />
      <path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
    </>
  ),
  displayName: 'IconArrowRightRhombus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
