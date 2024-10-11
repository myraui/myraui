import { useToast } from '../../toast';
import { FieldValues } from 'react-hook-form';
import Form, { FormProps } from '../form/form';
import { TAnyZodSafeFunctionHandler } from 'zsa';
import { useServerAction } from 'zsa-react';
import React from 'react';
import { errorHandler } from './error-handler';

export interface ServerFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = never,
  TTransformedValues extends FieldValues | undefined = undefined,
  A extends TAnyZodSafeFunctionHandler = TAnyZodSafeFunctionHandler,
> extends Omit<FormProps<TFieldValues, TContext, TTransformedValues | undefined>, 'action'> {
  /**
   * Server action to execute on form submission
   */
  action: A;
  /**
   * @default true
   * Show success toast on successful form submission
   */
  showSuccessToast?: boolean;

  /**
   * @default true
   * Show error toast on form submission error
   */
  showErrorToast?: boolean;

  /**
   * @default true
   * Reset form after successful submission
   */
  resetForm?: boolean;
}

function ServerForm<TFieldValues extends FieldValues, TContext = never, TTransformedValues extends FieldValues | undefined = undefined>({
  action,
  showSuccessToast = true,
  showErrorToast = true,
  resetForm = true,
  ...props
}: ServerFormProps<TFieldValues, TContext, TTransformedValues>) {
  const { execute } = useServerAction(action);
  const { toast } = useToast();

  async function onSubmit(values: never) {
    const [data, error] = await execute(values);

    if (error) {
      errorHandler(error, props.form, toast, showErrorToast);
      return;
    }
    if (data?.message) {
      if (showSuccessToast) {
        toast({ description: data.message, color: 'success' });
      }

      if (resetForm) {
        props.form.reset();
      }
    }
  }

  return <Form {...props} onSubmit={onSubmit as never} />;
}

export default ServerForm;
