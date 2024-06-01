import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronDownLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 8v8h8" />
    </>
  ),
  displayName: 'IconChevronDownLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
