import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowUpLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l10 10" />
      <path d="M16 7l-9 0l0 9" />
    </>
  ),
  displayName: 'IconArrowUpLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
