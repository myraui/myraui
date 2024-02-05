import { cn, myra } from '@myra-ui/react';
import React from 'react';
import { useTheme } from 'next-themes';

const backgrounds = [
  'bg-action-1',
  'bg-action-2',
  'bg-action-3',
  'bg-action-4',
  'bg-action-5',
  'bg-action-6',
  'bg-action-7',
  'bg-action-8',
  'bg-action-9',
  'bg-action-10',
  'bg-action-11',
  'bg-action-12',
];

export const Testing: React.FC<TestingProps> = (props) => {
  const { theme, setTheme } = useTheme();

  return (
    <myra.div className="h-screen flex flex-col" actionColor="blue">
      {theme && (
        <div className="h-12 text-white bg-black items-center justify-center flex">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme[0].toUpperCase() + theme.slice(1)}</button>
        </div>
      )}
      <div className="grid grid-cols-12 flex-1">
        {Array(12)
          .fill(0)
          .map((_, index) => {
            return (
              <div key={index} className={cn('flex items-center justify-center text-foreground-12', backgrounds[index])}>
                {index + 1}
              </div>
            );
          })}
      </div>
      <div className="h-24 grid grid-cols-3">
        <div className="items-center justify-center flex bg-neutral-8">Neutral</div>
        <div className="items-center justify-center flex bg-action-8">Action</div>
        <div className="items-center justify-center flex bg-foreground-8">Foreground</div>
      </div>
    </myra.div>
  );
};

interface TestingProps {
  colorScheme: string;
}
