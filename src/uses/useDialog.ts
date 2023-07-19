import { ComponentClass, ErrorInfo, FunctionComponent, useCallback, useContext } from 'react';
import { DialogContext, DialogRequireProps } from '../DialogContext';
import { getDialogDefault } from './dialogDefault';

export default function useDialog<P extends Partial<DialogRequireProps> = never, U extends P = P>(
  dialogComponent: FunctionComponent<U> | ComponentClass<U>
): (props: Omit<U, keyof DialogRequireProps> & Partial<DialogRequireProps>) => void {
  const value = useContext(DialogContext);
  if (value === undefined) {
    throw new Error('useDialog should be used within DialogContext.Provider');
  }

  return useCallback(
    (props, onErrorBoundary?: (error: unknown, errorInfo: ErrorInfo) => void) => {
      const dialogDefault = getDialogDefault();

      value.pushDialog(dialogComponent as any, props, onErrorBoundary || dialogDefault.onBoundaryError);
    },
    [value, dialogComponent]
  );
}
