import DialogContext from '../DialogContext/DialogContext';
import { AlertDialogProps } from '../AlertDialog';
import { useContext } from 'react';

export default function useAlertDialog(): (props: AlertDialogProps) => void {
  const value = useContext(DialogContext);
  if (value === undefined) {
    throw new Error('useAlertDialog should be used within DialogContext.Provider');
  }
  return value.alertDialog;
}
