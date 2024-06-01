import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCane = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 21l6.324 -11.69c.54 -.974 1.756 -4.104 -1.499 -5.762c-3.255 -1.657 -5.175 .863 -5.825 2.032" />
    </>
  ),
  displayName: 'IconCane',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
