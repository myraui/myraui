import { breakpoints } from './breakpoints';
import { ResponsiveRecord, ResponsiveThemedRecord, ResponsiveThemedValue, ResponsiveValue, SemanticRecord, ThemedRecord, ThemedValue } from './types';
import { RecordKey } from '@myra-ui/shared-utils';

export function getResponsiveRecord<Value>(responsiveValue: ResponsiveValue<Value>): ResponsiveRecord<Value> {
  if (breakpoints.some((bp) => (responsiveValue as any)?.[bp])) {
    return responsiveValue as ResponsiveRecord<Value>;
  }
  return { base: responsiveValue as Value } as ResponsiveRecord<Value>;
}

export function getThemedRecord<Value>(themedValue: ThemedValue<Value>): ThemedRecord<Value> {
  if (typeof themedValue === 'object') {
    return themedValue as ThemedRecord<Value>;
  }
  return { base: themedValue } as ThemedRecord<Value>;
}

export function getThemedValue<Value>(themedValue: ThemedValue<Value>, theme: string): Value {
  const resolvedValue = getThemedRecord(themedValue);

  return resolvedValue[theme as never] || resolvedValue.base;
}

export function getResponsiveThemedRecord<Value>(value: ResponsiveThemedValue<Value>): ResponsiveThemedRecord<Value> {
  const responsiveValue = getResponsiveRecord(value as ResponsiveValue<Value>);

  for (const [key, value] of Object.entries(responsiveValue)) {
    responsiveValue[key] = getThemedRecord(value) as any;
  }

  return responsiveValue as ResponsiveThemedRecord<Value>;
}

export function expandSemanticRecord<K extends RecordKey, Value>(semanticRecord: SemanticRecord<K, Value>): Record<K, ResponsiveThemedRecord<Value>> {
  const resolvedRecord: any = {};

  for (const [key, value] of Object.entries(semanticRecord)) {
    resolvedRecord[key] = getResponsiveThemedRecord(value);
  }

  return resolvedRecord;
}
