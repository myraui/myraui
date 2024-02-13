import { RecordKey } from '@myra-ui/shared-utils';
import { breakpoints } from './breakpoints';
import { BaseTheme } from '@myra-ui/colors';

export type Theme = BaseTheme | string;

export type BreakPoints = (typeof breakpoints)[number];

export type ThemedValue<Value> = Value | Partial<Record<Theme | 'base', Value>>;

export type ResponsiveRecord<Value> = Partial<Record<BreakPoints | string, Value>>;

export type ResponsiveValue<Value> = Value | ResponsiveRecord<Value>;

export type FullSemanticRecord<K extends RecordKey, Value = string> = Partial<Record<Theme, Record<K, Value>>>;

export type SemanticRecord<K extends RecordKey, Value = string> = Partial<Record<Theme, Partial<Record<K, Value>>>>;
