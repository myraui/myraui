import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCaretUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 14l-6 -6l-6 6h12" />
    </>
  ),
  displayName: 'IconCaretUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
