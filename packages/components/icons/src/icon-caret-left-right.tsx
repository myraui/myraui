import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCaretLeftRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 18l6 -6l-6 -6v12" />
      <path d="M10 18l-6 -6l6 -6v12" />
    </>
  ),
  displayName: 'IconCaretLeftRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
