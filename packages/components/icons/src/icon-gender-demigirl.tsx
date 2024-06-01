import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGenderDemigirl = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M12 14v7" />
      <path d="M9 18h3" />
    </>
  ),
  displayName: 'IconGenderDemigirl',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
