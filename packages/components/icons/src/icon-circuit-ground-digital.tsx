import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircuitGroundDigital = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13v-10" />
      <path d="M12 21l-6 -8h12z" />
    </>
  ),
  displayName: 'IconCircuitGroundDigital',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
