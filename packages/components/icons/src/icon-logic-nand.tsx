import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLogicNand = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12h-3" />
      <path d="M2 9h3" />
      <path d="M2 15h3" />
      <path d="M7 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" />
      <path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </>
  ),
  displayName: 'IconLogicNand',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
