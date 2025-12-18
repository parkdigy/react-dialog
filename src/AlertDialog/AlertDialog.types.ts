import React, { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';
import { DialogCommands, DialogProps } from '../Dialog';

export interface AlertDialogCommands extends Omit<DialogCommands, 'scrollToTop'> {}

export interface AlertDialogProps extends Omit<
  DialogProps,
  'ref' | 'commandsRef' | 'actions' | 'autoClose' | 'escapeClose' | 'onRequestClose'
> {
  ref?: React.Ref<AlertDialogCommands>;
  confirmButtonLabel?: ReactNode;
  confirmButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
  onCommands?: (commands: AlertDialogCommands) => void;
}
