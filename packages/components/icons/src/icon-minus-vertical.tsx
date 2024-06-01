import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMinusVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5v14" />
    </>
  ),
  displayName: 'IconMinusVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
