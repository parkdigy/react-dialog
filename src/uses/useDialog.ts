import { ComponentClass, ErrorInfo, FunctionComponent, useContext } from 'react';
import { DialogContext, DialogRequireProps } from '../DialogContext';
import { getDialogDefault } from './dialogDefault';

export default function useDialog<P extends Partial<DialogRequireProps>>(
  dialogComponent: FunctionComponent<P> | ComponentClass<P>
): (props: Omit<P, keyof DialogRequireProps> & Partial<DialogRequireProps>) => void {
  const value = useContext(DialogContext);
  if (Object.keys(value).length === 0) {
    throw new Error('useDialog should be used within DialogContext.Provider');
  }

  const pushDialog = value.pushDialog;

  return (props, onErrorBoundary?: (error: unknown, errorInfo: ErrorInfo) => void) => {
    const dialogDefault = getDialogDefault();

    pushDialog(dialogComponent as any, props, onErrorBoundary || dialogDefault.onBoundaryError);
  };
}
