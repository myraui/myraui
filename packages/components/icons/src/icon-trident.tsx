import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTrident = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2" />
      <path d="M12 21v-18l-2 2m4 0l-2 -2" />
    </>
  ),
  displayName: 'IconTrident',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
