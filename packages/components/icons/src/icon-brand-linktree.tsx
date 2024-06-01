import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandLinktree = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 10h16" />
      <path d="M6.5 4.5l11 11" />
      <path d="M6.5 15.5l11 -11" />
      <path d="M12 10v-8" />
      <path d="M12 15v7" />
    </>
  ),
  displayName: 'IconBrandLinktree',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
