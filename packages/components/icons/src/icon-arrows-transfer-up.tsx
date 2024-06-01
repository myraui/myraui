import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsTransferUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 21v-6" />
      <path d="M20 6l-3 -3l-3 3" />
      <path d="M17 3v18" />
      <path d="M10 18l-3 3l-3 -3" />
      <path d="M7 3v2" />
      <path d="M7 9v2" />
    </>
  ),
  displayName: 'IconArrowsTransferUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
