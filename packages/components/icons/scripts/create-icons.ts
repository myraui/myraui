import fs from 'fs';

const icons = {};

function pascalToKebab(str: string) {
  return str.replace(/([a-z0-9])([A-Z0-9])/g, '$1-$2').toLowerCase();
}

function camelCaseToPascal(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function dashToCamelCase(htmlString: string) {
  // Regular expression to find attributes in dash-case
  const attributeRegex = /([a-z])-([a-z])/g;

  // Replace dash-case attribute names with camelCase
  return htmlString.replace(attributeRegex, function (match, firstChar, secondChar) {
    return firstChar + secondChar.toUpperCase();
  });
}

function splitSvg(content: string): [string, string] {
  const regex = /(<svg .*?>)(.*)<\/svg>/gi;

  const match = regex.exec(content) as any;

  return [match[1], match[2]];
}

function extractAttributes(svgTag: string, omit = ['style', 'xmlns']) {
  const regex = /([a-z-]+)="([^"]*)"/gi;

  const attributes = {} as any;

  let match;
  while ((match = regex.exec(svgTag)) !== null) {
    if (omit.includes(match[1])) {
      continue;
    }
    attributes[match[1]] = match[2];
  }

  return attributes;
}

for (const icon in icons) {
  const iconName = icon.replace('tabler', 'icon');

  const iconComponentName = camelCaseToPascal(iconName);
  const iconFileName = pascalToKebab(iconName);

  const iconContent = dashToCamelCase((icons as any)[icon]);

  const [svgTag, svgContent] = splitSvg(iconContent);

  const attributes = extractAttributes(svgTag);

  const attributesStr = Object.entries(attributes)
    .filter(([key]) => key !== 'viewBox')
    .map(([key, value]) => `${key}: '${value}'`)
    .join(',\n  ');

  const iconComponent = `
import { createIcon } from '@myraui/icon';
import React from 'react';


export const ${iconComponentName} = createIcon({
  path: (
    <>
      ${svgContent}
    </>
  ),
  displayName: '${iconComponentName}',
  viewBox: '${attributes.viewBox}',
  defaultProps: {
    ${attributesStr}
  }
})
`;

  fs.writeFileSync(`./${iconFileName}.tsx`, iconComponent);

  // update index.ts

  const indexContent = fs.readFileSync('./index.ts', 'utf-8');
  const indexLines = indexContent.split('\n');

  const line = `export * from './${iconFileName}';`;

  if (!indexLines.includes(line)) {
    indexLines.push(line);
  }

  fs.writeFileSync('./index.ts', indexLines.filter((line) => Boolean(line.trim())).join('\n'));
}
