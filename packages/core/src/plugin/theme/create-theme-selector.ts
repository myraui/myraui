import { BASE_THEME } from '../../theme';

export function createThemeSelector(themeName: string): string {
  const rootSelector = themeName === BASE_THEME ? '' : `:root,`;

  return `${rootSelector}.${themeName},[data-theme="${themeName}"]`;
}
