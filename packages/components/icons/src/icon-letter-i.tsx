import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterI = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4l0 16" />
    </>
  ),
  displayName: 'IconLetterI',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
