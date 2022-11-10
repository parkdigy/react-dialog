import DialogContext from '../DialogContext/DialogContext';
import { ConfirmDialogProps } from '../ConfirmDialog';
import { useContext } from 'react';

export default function useConfirmDialog(): (props: ConfirmDialogProps) => void {
  const value = useContext(DialogContext);
  if (value === undefined) {
    throw new Error('useConfirmDialog should be used within DialogContext.Provider');
  }
  return value.confirmDialog;
}
