import { myra } from '@myra-ui/core';
import React from 'react';
import { useTheme } from 'next-themes';

export const Testing: React.FC<TestingProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <myra.div className="h-screen flex flex-col p-2">
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <div>Global</div>
      <myra.div className="h-48 grid grid-cols-8">
        <div className="items-center justify-center flex bg-default">Default</div>
        <div className="items-center justify-center flex bg-primary">Primary</div>
        <div className="items-center justify-center flex bg-secondary">Secondary</div>
        <div className="items-center justify-center flex bg-success">Success</div>
        <div className="items-center justify-center flex bg-warning">Warning</div>
        <div className="items-center justify-center flex bg-danger">Danger</div>
        <div className="items-center justify-center flex bg-focus">Focus</div>
        <div className="items-center justify-center flex bg-divider">Divider</div>
      </myra.div>
      <div>Local</div>
      <myra.div className="h-48 grid grid-cols-8" themeColors={{ primary: 'blue', secondary: { _dark: 'pink.12', _light: 'red.9' } }}>
        <div className="items-center justify-center flex bg-default">Default</div>
        <div className="items-center justify-center flex bg-primary">Primary</div>
        <div className="items-center justify-center flex bg-secondary">Secondary</div>
        <div className="items-center justify-center flex bg-success">Success</div>
        <div className="items-center justify-center flex bg-warning">Warning</div>
        <div className="items-center justify-center flex bg-danger">Danger</div>
        <div className="items-center justify-center flex bg-focus">Focus</div>
        <div className="items-center justify-center flex bg-divider">Divider</div>
      </myra.div>
      <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox</p>
      <div className="h-24 w-24 m-4" style={{ background: 'red' }}>
        Some box
      </div>
    </myra.div>
  );
};

interface TestingProps {
  colorScheme: string;
}
