import React from 'react';
import { Radio } from '@material-ui/core';
import { useField } from 'formik';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from '@material-ui/core';
const CustomRadio = ({
  name,
  legend,
  label,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configRadio = {
    ...field,
    ...otherProps,
    color: 'primary'
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Radio {...configRadio} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CustomRadio;