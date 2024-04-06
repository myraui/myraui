import { buildThemes } from '../build-themes';

describe('build-themes', () => {
  it('should run tests', () => {
    buildThemes({});
    expect(true).toBeTruthy();
  });
});
