import React, { useCallback, useLayoutEffect, useMemo, useRef } from 'react';
import { AlertDialogCommands, AlertDialogProps as Props, AlertDialogDefaultProps } from './AlertDialog.types';
import { Dialog, DialogCommands } from '../Dialog';
import { useAutoUpdateState } from '@pdg/react-hook';
import { DialogActionButton } from '../DialogActionButton';

const AlertDialog = React.forwardRef<AlertDialogCommands, Props>(
  ({ style: initStyle, commandsRef, confirmButtonLabel, confirmButtonProps, onShow, onClose, ...props }, ref) => {
    // Ref -------------------------------------------------------------------------------------------------------------

    const dialogRef = useRef<DialogCommands>(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useMemo(
        () => ({
          zIndex: 1399,
          initStyle,
        }),
        [initStyle]
      )
    );

    // Function - close --------------------------------------------------------------------------------------------------

    const getId = useCallback((): string => {
      return dialogRef.current?.getId() || '';
    }, [dialogRef]);

    const close = useCallback(() => {
      dialogRef.current?.close();
    }, [dialogRef]);

    // State - commands --------------------------------------------------------------------------------------------------

    const [commands] = useAutoUpdateState<AlertDialogCommands>(
      useMemo(
        () => ({
          getId,
          close,
        }),
        [getId, close]
      )
    );

    // Commands ----------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(commands || null);
        } else {
          ref.current = commands || null;
        }
      }

      if (commandsRef) {
        if (typeof commandsRef === 'function') {
          commandsRef(commands);
        } else {
          commandsRef.current = commands;
        }
      }

      return () => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(null);
          } else {
            ref.current = null;
          }
        }

        if (commandsRef) {
          if (typeof commandsRef === 'function') {
            commandsRef(undefined);
          } else {
            commandsRef.current = undefined;
          }
        }
      };
    }, [ref, commandsRef, commands]);

    // Event Handler ---------------------------------------------------------------------------------------------------

    const handleShow = useCallback(() => {
      if (onShow) onShow();
    }, [onShow]);

    const handleClose = useCallback(() => {
      if (onClose) onClose();
    }, [onClose]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Dialog
        ref={dialogRef}
        autoClose
        escapeClose
        style={style}
        onShow={handleShow}
        onClose={handleClose}
        {...props}
        actions={
          <DialogActionButton variant='text' {...confirmButtonProps} onClick={close}>
            {confirmButtonLabel}
          </DialogActionButton>
        }
      />
    );
  }
);

AlertDialog.displayName = 'AlertDialog';
AlertDialog.defaultProps = AlertDialogDefaultProps;

export default AlertDialog;
