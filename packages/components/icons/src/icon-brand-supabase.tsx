import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandSupabase = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 14h8v7l8 -11h-8v-7z" />
    </>
  ),
  displayName: 'IconBrandSupabase',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
