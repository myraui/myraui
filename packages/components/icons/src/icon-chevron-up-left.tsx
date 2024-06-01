import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronUpLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 16v-8h8" />
    </>
  ),
  displayName: 'IconChevronUpLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
