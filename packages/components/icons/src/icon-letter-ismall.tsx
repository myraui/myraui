import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLetterISmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8v8" />
    </>
  ),
  displayName: 'IconLetterISmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
