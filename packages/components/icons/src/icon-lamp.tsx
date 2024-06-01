import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLamp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 20h6" />
      <path d="M12 20v-8" />
      <path d="M5 12h14l-4 -8h-6z" />
    </>
  ),
  displayName: 'IconLamp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
