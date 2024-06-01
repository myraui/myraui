import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCreativeCommonsSa = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 16a4 4 0 1 0 -4 -4v1" />
      <path d="M6 12l2 2l2 -2" />
    </>
  ),
  displayName: 'IconCreativeCommonsSa',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
