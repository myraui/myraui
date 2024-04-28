import { StringOrNumber } from '@myraui/shared-utils';
import { Resolver } from './resolvers';
import { pipe } from 'fp-ts/lib/function';
import { fontSizeVariable } from '../utils/css-variables';
import * as RE from 'fp-ts/ReaderEither';

export const fontSizeResolver: Resolver = (key: string, value: StringOrNumber) => {
  return pipe(
    fontSizeVariable(key, { fontSize: { value: String(value) } }),
    RE.map(([fontSizeVariable, lineHeightVariable]) => ({
      value: [fontSizeVariable.reference(), lineHeightVariable.reference()],
      utilities: [fontSizeVariable],
    }))
  );
};
