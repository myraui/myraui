import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitGround = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13v-8" />
      <path d="M4 13h16" />
      <path d="M7 16h10" />
      <path d="M10 19h4" />
    </>
  ),
  displayName: 'IconCircuitGround',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
