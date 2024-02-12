import { renderHook } from '@testing-library/react-hooks';

import { useColorPalette } from '../index';

describe('useColorPalette', () => {
  it('should work correctly', () => {
    const result = renderHook(() => useColorPalette('dark'));

    console.log(result);
  });
});
