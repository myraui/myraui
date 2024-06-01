import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarToUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 10l0 10" />
      <path d="M12 10l4 4" />
      <path d="M12 10l-4 4" />
      <path d="M4 4l16 0" />
    </>
  ),
  displayName: 'IconArrowBarToUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
