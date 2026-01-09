import { type ComponentClass, type ErrorInfo, type FunctionComponent } from 'react';
import { type AlertDialogProps } from '../AlertDialog';
import { type ConfirmDialogProps } from '../ConfirmDialog';
export interface DialogRequireProps {
    onShow: () => void;
    onClose: () => void;
}
export type PushDialog<P extends DialogRequireProps = never, U extends P = P> = (dialogComponent: FunctionComponent<U> | ComponentClass<U>, props?: Partial<DialogRequireProps>, onErrorBoundary?: (error: unknown, errorInfo: ErrorInfo) => void) => void;
export interface DialogContextValue {
    pushDialog: PushDialog;
    alertDialog: (props: AlertDialogProps) => void;
    confirmDialog: (props: ConfirmDialogProps) => void;
}
