import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 7l-10 10" />
      <path d="M16 17l-9 0l0 -9" />
    </>
  ),
  displayName: 'IconArrowDownLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
