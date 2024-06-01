import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPassword = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 10v4" />
      <path d="M10 13l4 -2" />
      <path d="M10 11l4 2" />
      <path d="M5 10v4" />
      <path d="M3 13l4 -2" />
      <path d="M3 11l4 2" />
      <path d="M19 10v4" />
      <path d="M17 13l4 -2" />
      <path d="M17 11l4 2" />
    </>
  ),
  displayName: 'IconPassword',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
