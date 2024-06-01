import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 7l4 -4l4 4" />
      <path d="M8 17l4 4l4 -4" />
      <path d="M12 3l0 18" />
    </>
  ),
  displayName: 'IconArrowsVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
