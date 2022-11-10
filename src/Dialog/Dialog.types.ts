import React, { ReactNode } from 'react';
import { DialogProps as _DialogProps, DialogTitleProps } from '@mui/material';

export interface DialogCommands {
  getId(): string;
  close(): void;
  scrollToTop(): void;
}

export type DialogCommandsRefFunction = (commands: DialogCommands | undefined) => void;

export interface DialogProps extends Omit<_DialogProps, 'ref' | 'open' | 'title' | 'aria-labelledby' | 'onClose'> {
  commandsRef?: React.MutableRefObject<DialogCommands | undefined> | DialogCommandsRefFunction;
  content: ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  titleIcon?: string;
  title?: ReactNode;
  titleProps?: Partial<Omit<DialogTitleProps, 'children'>>;
  actions?: ReactNode;
  hideClose?: boolean;
  autoClose?: boolean;
  backdropClose?: boolean;
  escapeClose?: boolean;
  fullHeight?: boolean;
  onShow?(): void;
  onRequestClose?(): void;
  onClose?(): void;
}

export const DialogDefaultProps: Pick<DialogProps, 'color'> = {
  color: 'primary',
};
