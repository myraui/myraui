import { TZSAError } from 'zsa';
import { ZodType } from 'zod';
import { FieldValues } from 'react-hook-form';
import { UseFormReturn } from '../form/use-form';
import { ToastFunction } from '../../toast';

export function errorHandler<
  Schema extends ZodType,
  TFieldValues extends FieldValues,
  TContext = never,
  TTransformedValues extends FieldValues | undefined = undefined,
>(error: TZSAError<Schema>, form: UseFormReturn<TFieldValues, TContext, TTransformedValues>, toast: ToastFunction, showToast = true) {
  if (error?.code === 'INPUT_PARSE_ERROR') {
    if (error.fieldErrors) {
      for (const [field, fieldErrors] of Object.entries(error.fieldErrors)) {
        form.setError(field as never, { message: (fieldErrors as never)[0] });
      }
    }

    if (error.formErrors?.length) {
      if (showToast) {
        toast({ description: error.formErrors[0], color: 'danger' });
      }
    }
  } else {
    if (showToast) {
      toast({ description: error.message, color: 'danger' });
    }
  }
}
