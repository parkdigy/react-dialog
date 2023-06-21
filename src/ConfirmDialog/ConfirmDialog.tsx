import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { ConfirmDialogCommands, ConfirmDialogProps as Props, ConfirmDialogDefaultProps } from './ConfirmDialog.types';
import { Dialog, DialogCommands } from '../Dialog';
import { DialogActionButton } from '../DialogActionButton';
import { useAutoUpdateState } from '@pdg/react-hook';
import { Typography } from '@mui/material';

const ConfirmDialog = React.forwardRef<ConfirmDialogCommands, Props>(
  (
    {
      style: initStyle,
      commandsRef,
      color,
      confirmButtonLabel,
      confirmButtonProps,
      cancelButtonLabel,
      cancelButtonProps,
      onShow,
      onClose,
      onConfirm,
      onCancel,
      ...props
    },
    ref
  ) => {
    // Ref -------------------------------------------------------------------------------------------------------------

    const dialogRef = useRef<DialogCommands>(null);

    // State -----------------------------------------------------------------------------------------------------------

    const [style] = useAutoUpdateState<Props['style']>(
      useCallback(() => {
        return { zIndex: 1399, initStyle };
      }, [initStyle])
    );

    // Function - close --------------------------------------------------------------------------------------------------

    const getId = useCallback((): string => {
      return dialogRef.current?.getId() || '';
    }, [dialogRef]);

    const close = useCallback(() => {
      dialogRef.current?.close();
    }, [dialogRef]);

    // State - commands --------------------------------------------------------------------------------------------------

    const [commands] = useAutoUpdateState<ConfirmDialogCommands>(
      useCallback(() => {
        return {
          getId,
          close,
        };
      }, [getId, close])
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

    const handleCancelClick = useCallback(() => {
      if (onCancel) onCancel(commands);
    }, [commands, onCancel]);

    const handleConfirmClick = useCallback(() => {
      if (onConfirm) onConfirm(commands);
    }, [onConfirm, commands]);

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Dialog
        ref={dialogRef}
        color={color}
        escapeClose={true}
        style={style}
        onShow={handleShow}
        onClose={handleClose}
        onRequestClose={handleCancelClick}
        {...props}
        actions={
          <>
            <DialogActionButton variant='text' {...cancelButtonProps} onClick={handleCancelClick}>
              <Typography fontSize='inherit' style={{ color: '#6f6f6f' }}>
                {cancelButtonLabel}
              </Typography>
            </DialogActionButton>
            <DialogActionButton variant='text' color={color} {...confirmButtonProps} onClick={handleConfirmClick}>
              {confirmButtonLabel}
            </DialogActionButton>
          </>
        }
      />
    );
  }
);

ConfirmDialog.displayName = 'ConfirmDialog';
ConfirmDialog.defaultProps = ConfirmDialogDefaultProps;

export default ConfirmDialog;
