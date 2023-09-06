import React, { ReactNode } from 'react';
import { DialogCommands, DialogProps } from '../Dialog';
import { ButtonProps } from '@mui/material';
export interface ConfirmDialogCommands extends Omit<DialogCommands, 'scrollToTop'> {
}
export type ConfirmDialogCommandsRefFunction = (commands: ConfirmDialogCommands | undefined) => void;
export interface ConfirmDialogProps extends Omit<DialogProps, 'commandsRef' | 'actions' | 'autoClose' | 'backdropClose' | 'escapeClose' | 'onRequestClose'> {
    commandsRef?: React.MutableRefObject<ConfirmDialogCommands | undefined> | ConfirmDialogCommandsRefFunction;
    confirmButtonLabel?: ReactNode;
    confirmButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
    cancelButtonLabel?: ReactNode;
    cancelButtonProps?: Omit<ButtonProps, 'children' | 'onClick'>;
    onConfirm?(commands: ConfirmDialogCommands): void;
    onCancel?(commands: ConfirmDialogCommands): void;
}
export declare const ConfirmDialogDefaultProps: Pick<ConfirmDialogProps, 'color' | 'confirmButtonLabel' | 'cancelButtonLabel'>;
