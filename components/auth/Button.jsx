import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  variant,
  color,
  size,
  call,
  onClick,
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    if(call == 'add') {
      submitForm();
    } else if(call == 'submit') {
      onClick()
    } else submitForm()
  }

  const configButton = {
    variant: variant || 'contained',
    color: color || 'primary',
    fullWidth: true,
    onClick: onClick || handleSubmit,
    size: size
  }

  return (
    <Button
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;