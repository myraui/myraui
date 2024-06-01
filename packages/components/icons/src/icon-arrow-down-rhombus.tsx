import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowDownRhombus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8v13" />
      <path d="M15 18l-3 3l-3 -3" />
      <path d="M14.5 5.5l-2.5 -2.5l-2.5 2.5l2.5 2.5z" />
    </>
  ),
  displayName: 'IconArrowDownRhombus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
