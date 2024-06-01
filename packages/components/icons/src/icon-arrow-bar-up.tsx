import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l0 10" />
      <path d="M12 4l4 4" />
      <path d="M12 4l-4 4" />
      <path d="M4 20l16 0" />
    </>
  ),
  displayName: 'IconArrowBarUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
