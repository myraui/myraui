import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandGravatar = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" />
    </>
  ),
  displayName: 'IconBrandGravatar',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
