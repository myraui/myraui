import { SemanticRecord } from './types';
import { RecordKey } from '@myra-ui/shared-utils';

export type ResolvedSemanticRecord = Record<>;

export function resolveSemanticRecord<K extends RecordKey, Value>(record: SemanticRecord<K, Value>) {}
