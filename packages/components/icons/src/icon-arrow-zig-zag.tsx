import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowZigZag = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 20v-10l10 6v-12" />
      <path d="M13 7l3 -3l3 3" />
    </>
  ),
  displayName: 'IconArrowZigZag',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
