import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCaretRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 18l6 -6l-6 -6v12" />
    </>
  ),
  displayName: 'IconCaretRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
