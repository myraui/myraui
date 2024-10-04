import { useToast } from '../../toast';
import { FieldValues } from 'react-hook-form';
import Form, { FormProps } from '../form/form';
import { TAnyZodSafeFunctionHandler } from 'zsa';
import { useServerAction } from 'zsa-react';
import React from 'react';

export interface ServerFormProps<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined>
  extends Omit<FormProps<TFieldValues, TContext, TTransformedValues>, 'action'> {
  action: TAnyZodSafeFunctionHandler;
}

function ServerForm<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined>({
  action,
  ...props
}: ServerFormProps<TFieldValues, TContext, TTransformedValues>) {
  const { execute } = useServerAction(action);
  const { toast } = useToast();

  async function onSubmit(values: never) {
    const [data, error] = await execute(values);

    if (error) {
      if (error.fieldErrors) {
        for (const [field, fieldErrors] of Object.entries(error.fieldErrors)) {
          props.form.setError(field as never, { message: (fieldErrors as never)[0] });
        }
      }

      if (error.message) {
        toast({ description: error.message, color: 'danger' });
      }
      return;
    }
    if (data?.message) {
      toast({ description: data.message, color: 'success' });
      props.form.reset();
    }
  }

  return <Form {...props} onSubmit={onSubmit as never} />;
}

export default ServerForm;
