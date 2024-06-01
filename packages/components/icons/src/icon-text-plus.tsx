import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextPlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 10h-14" />
      <path d="M5 6h14" />
      <path d="M14 14h-9" />
      <path d="M5 18h6" />
      <path d="M18 15v6" />
      <path d="M15 18h6" />
    </>
  ),
  displayName: 'IconTextPlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
