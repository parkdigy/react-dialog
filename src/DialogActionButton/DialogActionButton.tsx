import React from 'react';
import { Button, styled } from '@mui/material';
import { DialogActionButtonProps as Props } from './DialogActionButton.types';

const DialogActionButton = ({ variant, ...otherProps }: Props) => {
  return <StyledButton variant={variant || 'text'} {...otherProps} />;
};

export default DialogActionButton;

/********************************************************************************************************************
 * Styled Components
 * ******************************************************************************************************************/

const StyledButton = styled(Button)`
  padding-left: 15px;
  padding-right: 15px;
  min-width: 0;
`;
