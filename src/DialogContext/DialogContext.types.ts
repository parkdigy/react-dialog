import { ComponentClass, FunctionComponent } from 'react';
import { AlertDialogProps } from '../AlertDialog';
import { ConfirmDialogProps } from '../ConfirmDialog';

export interface DialogRequireProps {
  onShow(): void;
  onClose(): void;
  [key: string]: any;
}

export type PushDialog<P extends DialogRequireProps = never, U extends P = P> = (
  dialogComponent: FunctionComponent<U> | ComponentClass<U>,
  props?: Partial<DialogRequireProps>
) => void;

export interface DialogContextValue {
  pushDialog: PushDialog;
  alertDialog(props: AlertDialogProps): void;
  confirmDialog(props: ConfirmDialogProps): void;
}

/* eslint-disable */
export const DialogContextDefaultValue: DialogContextValue = {
  pushDialog() {},
  alertDialog() {},
  confirmDialog() {},
};
/* eslint-enable */
