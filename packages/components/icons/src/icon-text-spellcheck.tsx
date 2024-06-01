import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextSpellcheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" />
      <path d="M5 10h7" />
      <path d="M10 18l3 3l7 -7" />
    </>
  ),
  displayName: 'IconTextSpellcheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
