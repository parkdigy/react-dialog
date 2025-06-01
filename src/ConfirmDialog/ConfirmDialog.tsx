import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { ConfirmDialogCommands, ConfirmDialogProps as Props } from './ConfirmDialog.types';
import { Dialog, DialogCommands } from '../Dialog';
import { DialogActionButton } from '../DialogActionButton';
import { Typography } from '@mui/material';
import { useForwardRef } from '@pdg/react-hook';

const ConfirmDialog = React.forwardRef<ConfirmDialogCommands, Props>(
  (
    {
      style: initStyle,
      maxWidth = 'xs',
      color = 'primary',
      confirmButtonLabel = '확인',
      confirmButtonProps,
      cancelButtonLabel = '취소',
      cancelButtonProps,
      onShow,
      onClose,
      onConfirm,
      onCancel,
      onCommands,
      ...props
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const dialogRef = useRef<DialogCommands>(null);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    const commands = useMemo(
      () =>
        ({
          getId: () => dialogRef.current?.getId() || '',
          close: () => dialogRef.current?.close(),
        }) as ConfirmDialogCommands,
      []
    );

    useForwardRef(ref, commands);

    useLayoutEffect(() => {
      onCommands && onCommands(commands);
    }, [commands, onCommands]);

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Dialog
        ref={dialogRef}
        maxWidth={maxWidth}
        color={color}
        escapeClose={true}
        style={{ zIndex: 1399, ...initStyle }}
        onShow={() => onShow && onShow()}
        onClose={() => onClose && onClose()}
        onRequestClose={() => onCancel && onCancel(commands)}
        {...props}
        actions={
          <>
            <DialogActionButton variant='text' {...cancelButtonProps} onClick={() => onCancel && onCancel(commands)}>
              <Typography fontSize='inherit' style={{ color: '#6f6f6f' }}>
                {cancelButtonLabel}
              </Typography>
            </DialogActionButton>
            <DialogActionButton
              variant='text'
              color={color}
              {...confirmButtonProps}
              onClick={() => onConfirm && onConfirm(commands)}
            >
              {confirmButtonLabel}
            </DialogActionButton>
          </>
        }
      />
    );
  }
);

ConfirmDialog.displayName = 'ConfirmDialog';

export default ConfirmDialog;
