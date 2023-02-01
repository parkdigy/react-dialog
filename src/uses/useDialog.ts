import { ComponentClass, FunctionComponent, useCallback, useContext } from 'react';
import { DialogContext, DialogRequireProps } from '../DialogContext';

export default function useDialog<P extends Partial<DialogRequireProps> = never, U extends P = P>(
  dialogComponent: FunctionComponent<U> | ComponentClass<U>
): (props: Omit<U, keyof DialogRequireProps> & Partial<DialogRequireProps>) => void {
  const value = useContext(DialogContext);
  if (value === undefined) {
    throw new Error('useDialog should be used within DialogContext.Provider');
  }

  return useCallback(
    (props) => {
      value.pushDialog(dialogComponent as any, props);
    },
    [value, dialogComponent]
  );
}
