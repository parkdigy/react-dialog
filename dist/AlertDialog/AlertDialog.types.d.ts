import React, { type ReactNode } from 'react';
import { type ButtonProps } from '@mui/material';
import { type DialogCommands, type DialogProps } from '../Dialog';
export interface AlertDialogCommands extends Omit<DialogCommands, 'scrollToTop'> {
}
export interface AlertDialogProps extends Omit<DialogProps, 'ref' | 'commandsRef' | 'actions' | 'autoClose' | 'escapeClose' | 'onRequestClose'> {
    ref?: React.Ref<AlertDialogCommands>;
    confirmButtonLabel?: ReactNode;
    confirmButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
    onCommands?: (commands: AlertDialogCommands) => void;
}
