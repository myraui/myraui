import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathXPlusY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 9l3 5.063" />
      <path d="M2 9l6 6" />
      <path d="M2 15l6 -6" />
      <path d="M22 9l-4.8 9" />
      <path d="M10 12h4" />
      <path d="M12 10v4" />
    </>
  ),
  displayName: 'IconMathXPlusY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
