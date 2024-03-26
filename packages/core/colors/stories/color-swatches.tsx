import React from 'react';
import { shades } from '../src';
import { myraColors } from '../src';

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const colorNames = Object.keys(myraColors);

export const ColorSwatches: React.FC<ColorSwatchesProps> = (props) => {
  return (
    <div className={`flex flex-col gap-2 p-8`}>
      <div className="grid grid-cols-13 h-8 text-center">
        <div className="col-start-2 col-span-2 border-b border-b-1">Backgrounds</div>
        <div className="col-span-3">Interactive Components</div>
        <div className="col-span-3">Borders and separators</div>
        <div className="col-span-2">Solid colors</div>
        <div className="col-span-2">Accessible Text</div>
      </div>
      <div className="grid grid-cols-13 h-12 items-center justify-items-center">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div className={i === 0 ? 'col-start-2' : ''}>{i + 1}</div>
          ))}
      </div>
      <div className="flex flex-col gap-1">
        {colorNames.slice(0, colorNames.length - 2).map((color) => {
          return (
            <div className="grid grid-cols-13 h-14 gap-1">
              <div className="self-center">{capitalize(color)}</div>
              {Object.values(shades).map((shadeValue) => {
                return (
                  <div
                    style={{
                      background: `hsl(var(--myra-ui-colors-${color}-${shadeValue}) / var(--myra-ui-colors-${color}-${shadeValue}-opacity, 1))`,
                    }}
                  ></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface ColorSwatchesProps {}
