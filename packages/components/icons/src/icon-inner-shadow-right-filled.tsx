import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInnerShadowRightFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M4.929 4.929c3.905 -3.905 10.237 -3.905 14.142 0c3.905 3.905 3.905 10.237 0 14.142c-3.905 3.905 -10.237 3.905 -14.142 0c-3.905 -3.905 -3.905 -10.237 0 -14.142zm12.02 2.121a1 1 0 0 0 -1.413 1.414a5 5 0 0 1 0 7.072a1 1 0 0 0 1.414 1.414a7 7 0 0 0 0 -9.9z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconInnerShadowRightFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
