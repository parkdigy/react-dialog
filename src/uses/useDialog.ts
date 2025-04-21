import { ComponentClass, ErrorInfo, FunctionComponent, useCallback, useContext } from 'react';
import { DialogContext, DialogRequireProps } from '../DialogContext';
import { getDialogDefault } from './dialogDefault';

export default function useDialog<P extends Partial<DialogRequireProps>>(
  dialogComponent: FunctionComponent<P> | ComponentClass<P>
): (props: Omit<P, keyof DialogRequireProps> & Partial<DialogRequireProps>) => void {
  const value = useContext(DialogContext);
  if (value === undefined) {
    throw new Error('useDialog should be used within DialogContext.Provider');
  }

  const pushDialog = value.pushDialog;

  return useCallback(
    (props, onErrorBoundary?: (error: unknown, errorInfo: ErrorInfo) => void) => {
      const dialogDefault = getDialogDefault();

      pushDialog(dialogComponent as any, props, onErrorBoundary || dialogDefault.onBoundaryError);
    },
    [pushDialog, dialogComponent]
  );
}
