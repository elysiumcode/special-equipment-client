import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const TextfieldWrapper = ({
  name,
  variant,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: variant || 'filled'
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
    console.log(meta)
  }

  return (
    <TextField {...configTextfield} />
  );
};

export default TextfieldWrapper;