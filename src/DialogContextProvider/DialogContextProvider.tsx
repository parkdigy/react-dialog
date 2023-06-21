import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { DialogContextProviderProps as Props } from './DialogContextProvider.types';
import {
  DialogContext,
  DialogContextDefaultValue,
  DialogContextValue,
  DialogRequireProps,
  PushDialog,
} from '../DialogContext';
import { useAutoUpdateState } from '@pdg/react-hook';
import { AlertDialog, AlertDialogCommands, AlertDialogProps } from '../AlertDialog';
import { ConfirmDialog, ConfirmDialogCommands, ConfirmDialogProps } from '../ConfirmDialog';

const DialogContextProvider: React.FC<Props> = ({ children }) => {
  // Ref -------------------------------------------------------------------------------------------------------------

  const dialogKeyRef = useRef(0);

  // State -------------------------------------------------------------------------------------------------------------

  const [dialogs, setDialogs] = useState<ReactNode[]>([]);
  const [dialogIds] = useState<{ [key: string]: any }>({});

  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleShow = useCallback(
    (dialog: JSX.Element, id: string, onShow?: (id: string) => void) => {
      dialogIds[id] = dialog;
      if (onShow) onShow(id);
    },
    [dialogIds]
  );

  const handleClose = useCallback(
    (id: string, onClose?: (id: string) => void) => {
      const dialog = dialogIds[id];
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

        delete dialogIds[id];
      }
      if (onClose) onClose(id);
    },
    [dialogIds]
  );

  // Function - alertDialog --------------------------------------------------------------------------------------------

  const alertDialog = useCallback(
    (props: AlertDialogProps) => {
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
    },
    [handleClose, handleShow]
  );

  // Function - confirmDialog ------------------------------------------------------------------------------------------

  const confirmDialog = useCallback(
    (props: ConfirmDialogProps) => {
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
    },
    [handleClose, handleShow]
  );

  // Function - pushDialog ---------------------------------------------------------------------------------------------

  const pushDialog = useCallback<PushDialog>(
    (dialogComponent, props?) => {
      dialogKeyRef.current += 1;
      const dialogId = `dig_${dialogKeyRef.current}`;
      const dialog = React.createElement<DialogRequireProps>(dialogComponent as any, {
        key: dialogKeyRef.current,
        ...props,
        onShow: () => {
          handleShow(dialog, dialogId, props?.onShow);
        },
        onClose: () => {
          handleClose(dialogId, props?.onClose);
        },
      });

      setDialogs((dialogs) => {
        return [...dialogs, dialog];
      });
    },
    [handleClose, handleShow]
  );

  // State - value -----------------------------------------------------------------------------------------------------

  const [value] = useAutoUpdateState<DialogContextValue>(
    DialogContextDefaultValue,
    useCallback((): DialogContextValue => {
      return { pushDialog, alertDialog, confirmDialog };
    }, [alertDialog, confirmDialog, pushDialog])
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <DialogContext.Provider value={value}>
      {children}
      {dialogs}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
