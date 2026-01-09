import React, { type ReactNode, useCallback, useRef, useState } from 'react';
import { type DialogContextProviderProps as Props } from './DialogContextProvider.types';
import { DialogContext, type DialogRequireProps, type PushDialog } from '../DialogContext';
import { AlertDialog, type AlertDialogCommands, type AlertDialogProps } from '../AlertDialog';
import { ConfirmDialog, type ConfirmDialogCommands, type ConfirmDialogProps } from '../ConfirmDialog';
import DialogErrorBoundary from '../DialogErrorBoundary';

const DialogContextProvider = ({ children }: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogKeyRef = useRef(0);
  const dialogIdsRef = useRef<Record<string, any>>({});

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [dialogs, setDialogs] = useState<ReactNode[]>([]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleShow = (dialog: React.JSX.Element, id: string, onShow?: (id: string) => void) => {
    dialogIdsRef.current[id] = dialog;
    onShow?.(id);
  };

  const handleClose = (id: string, onClose?: (id: string) => void) => {
    const dialog = dialogIdsRef.current[id];
    if (dialog) {
      setDialogs((dialogs) => {
        const idx = dialogs.indexOf(dialog);
        if (idx > -1) {
          const newDialogs = [...dialogs];
          newDialogs.splice(idx, 1);
          return newDialogs;
        } else {
          return dialogs;
        }
      });

      delete dialogIdsRef.current[id];
    }
    onClose?.(id);
  };

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const alertDialog = useCallback((props: AlertDialogProps) => {
    dialogKeyRef.current += 1;

    const { onShow, onClose, ...otherProps } = props;

    let dialogId: string;

    const dialog = (
      <AlertDialog
        ref={(commands: AlertDialogCommands) => {
          if (commands) {
            dialogId = commands.getId();
          }
        }}
        key={dialogKeyRef.current}
        {...otherProps}
        onShow={() => {
          handleShow(dialog, dialogId, onShow);
        }}
        onClose={() => {
          handleClose(dialogId, onClose);
        }}
      />
    );

    setDialogs((dialogs) => {
      return [...dialogs, dialog];
    });
  }, []);

  const confirmDialog = useCallback((props: ConfirmDialogProps) => {
    dialogKeyRef.current += 1;

    const { onShow, onClose, ...otherProps } = props;

    let dialogId: string;

    const dialog = (
      <ConfirmDialog
        ref={(commands: ConfirmDialogCommands) => {
          if (commands) {
            dialogId = commands.getId();
          }
        }}
        key={dialogKeyRef.current}
        {...otherProps}
        onShow={() => handleShow(dialog, dialogId, onShow)}
        onClose={() => handleClose(dialogId, onClose)}
      />
    );

    setDialogs((dialogs) => {
      return [...dialogs, dialog];
    });
  }, []);

  const pushDialog: PushDialog = useCallback((dialogComponent, props?, onErrorBoundary?) => {
    dialogKeyRef.current += 1;
    const dialogId = `dig_${dialogKeyRef.current}`;
    const dialog = (
      <DialogErrorBoundary key={dialogKeyRef.current} onError={onErrorBoundary}>
        {React.createElement<DialogRequireProps>(dialogComponent as any, {
          ...props,
          onShow: () => {
            handleShow(dialog, dialogId, props?.onShow);
          },
          onClose: () => {
            handleClose(dialogId, props?.onClose);
          },
        })}
      </DialogErrorBoundary>
    );

    setDialogs((dialogs) => {
      return [...dialogs, dialog];
    });
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <DialogContext.Provider value={{ pushDialog, alertDialog, confirmDialog }}>
      {children}
      {dialogs}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
