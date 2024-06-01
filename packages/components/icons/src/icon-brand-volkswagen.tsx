import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandVolkswagen = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
      <path d="M5 7l4.5 11l1.5 -5h2l1.5 5l4.5 -11" />
      <path d="M9 4l2 6h2l2 -6" />
    </>
  ),
  displayName: 'IconBrandVolkswagen',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
