import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarToDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20l16 0" />
      <path d="M12 14l0 -10" />
      <path d="M12 14l4 -4" />
      <path d="M12 14l-4 -4" />
    </>
  ),
  displayName: 'IconArrowBarToDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
