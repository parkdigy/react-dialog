import { ReactNode } from 'react';
import { DialogContentProps, DialogProps as _DialogProps, DialogTitleProps } from '@mui/material';

export interface DialogCommands {
  getId(): string;
  close(): void;
  scrollToTop(): void;
}

export interface DialogProps
  extends Omit<_DialogProps, 'ref' | 'open' | 'title' | 'aria-labelledby' | 'content' | 'onClose'> {
  content: ReactNode;
  contentProps?: Partial<Omit<DialogContentProps, 'children'>>;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  titleIcon?: string;
  title?: ReactNode;
  titleProps?: Partial<Omit<DialogTitleProps, 'children'>>;
  subTitle?: ReactNode;
  actions?: ReactNode;
  hideClose?: boolean;
  autoClose?: boolean;
  backdropClose?: boolean;
  escapeClose?: boolean;
  fullHeight?: boolean;
  margin?: number;
  onShow?: () => void;
  onRequestClose?: () => void;
  onClose?: () => void;
  onCommands?: (commands: DialogCommands) => void;
}
