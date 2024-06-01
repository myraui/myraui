import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCaretLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 6l-6 6l6 6v-12" />
    </>
  ),
  displayName: 'IconCaretLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
