import React, { useEffect, useState } from 'react';
import { Select, Selection, SelectItem, SelectProps } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { themes } from '@myraui/react-utils';

export interface ThemeSelectorProps extends Omit<SelectProps, 'items' | 'selectionMode' | 'onSelectionChange' | 'selectedKeys' | 'children'> {}

export const ThemeSelector: React.FC<ThemeSelectorProps> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [value, setValue] = useState<Selection>(new Set(theme ? [theme] : []));

  useEffect(() => {
    const theme = Array.from(value)[0];

    if (theme) {
      setTheme(theme as string);
    }
  }, [value]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select
      {...props}
      items={Object.values(themes)}
      selectionMode="single"
      onSelectionChange={(select) => {
        if (select instanceof Set && select.size > 0) {
          setValue(select);
        }
      }}
      selectedKeys={value}
      aria-label={props['aria-label'] || 'Select a theme'}
    >
      {(item) => (
        <SelectItem key={item.value} value={item.value} aria-label={item.label}>
          {item.label}
        </SelectItem>
      )}
    </Select>
  );
};

ThemeSelector.displayName = 'MyraUI.ThemeSelector';

export default ThemeSelector;
