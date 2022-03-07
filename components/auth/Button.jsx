import React from 'react';
import { Button } from '@material-ui/core';
import { useFormikContext } from 'formik';

const ButtonWrapper = ({
  children,
  variant,
  color,
  size,
  onClick,
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    console.log(1)
    submitForm()
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