import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronUpRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8h8v8" />
    </>
  ),
  displayName: 'IconChevronUpRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
