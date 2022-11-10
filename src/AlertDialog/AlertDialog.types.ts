import React, { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';
import { DialogCommands, DialogProps } from '../Dialog';

export interface AlertDialogCommands extends Omit<DialogCommands, 'scrollToTop'> {}

export type AlertDialogCommandsRefFunction = (commands: AlertDialogCommands | undefined) => void;

export interface AlertDialogProps
  extends Omit<
    DialogProps,
    'commandsRef' | 'actions' | 'autoClose' | 'backdropClose' | 'escapeClose' | 'onRequestClose'
  > {
  commandsRef?: React.MutableRefObject<AlertDialogCommands | undefined> | AlertDialogCommandsRefFunction;
  confirmButtonLabel?: ReactNode;
  confirmButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
}

export const AlertDialogDefaultProps: Pick<AlertDialogProps, 'color' | 'confirmButtonLabel'> = {
  color: 'primary',
  confirmButtonLabel: '확인',
};
