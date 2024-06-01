import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7l10 10" />
      <path d="M17 8l0 9l-9 0" />
    </>
  ),
  displayName: 'IconArrowDownRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
