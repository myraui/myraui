import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronDownRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 8v8h-8" />
    </>
  ),
  displayName: 'IconChevronDownRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
