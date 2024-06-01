import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 4l5 9l5 -9" />
      <path d="M12 13l0 7" />
    </>
  ),
  displayName: 'IconLetterY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
