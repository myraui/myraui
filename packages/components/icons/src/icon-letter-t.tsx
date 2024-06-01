import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterT = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4l12 0" />
      <path d="M12 4l0 16" />
    </>
  ),
  displayName: 'IconLetterT',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
