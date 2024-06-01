import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDna = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
      <path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
      <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
    </>
  ),
  displayName: 'IconDna',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
