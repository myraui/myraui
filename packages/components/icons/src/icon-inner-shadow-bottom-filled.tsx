import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInnerShadowBottomFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M5.144 4.72c3.92 -3.695 10.093 -3.625 13.927 .209c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm3.32 10.816a1 1 0 1 0 -1.414 1.414a7 7 0 0 0 9.9 0a1 1 0 0 0 -1.414 -1.414a5 5 0 0 1 -7.072 0z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconInnerShadowBottomFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
