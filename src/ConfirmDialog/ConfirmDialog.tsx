import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { ConfirmDialogCommands, ConfirmDialogProps as Props } from './ConfirmDialog.types';
import { Dialog, DialogCommands, DialogProps } from '../Dialog';
import { DialogActionButton } from '../DialogActionButton';
import { Box, useTheme } from '@mui/material';
import { useForwardRef } from '@pdg/react-hook';

const ConfirmDialog = React.forwardRef<ConfirmDialogCommands, Props>(
  (
    {
      type = 'default',
      content,
      style: initStyle,
      maxWidth = 'xs',
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
     * Use
     * ******************************************************************************************************************/

    const theme = useTheme();

    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const dialogRef = useRef<DialogCommands>(null);

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const { color, textColor } = useMemo(() => {
      let newColor: DialogProps['color'];
      let newTextColor: string;
      switch (type) {
        case 'primary':
          newColor = 'info';
          newTextColor = theme.palette.primary.main;
          break;
        case 'secondary':
          newColor = 'secondary';
          newTextColor = theme.palette.secondary.main;
          break;
        case 'info':
          newColor = 'info';
          newTextColor = theme.palette.info.main;
          break;
        case 'success':
          newColor = 'success';
          newTextColor = theme.palette.success.main;
          break;
        case 'warning':
          newColor = 'warning';
          newTextColor = theme.palette.warning.main;
          break;
        case 'error':
          newColor = 'error';
          newTextColor = theme.palette.error.main;
          break;
        default:
          newColor = 'primary';
          newTextColor = theme.palette.text.primary;
      }
      return { color: newColor, textColor: newTextColor };
    }, [
      theme.palette.error.main,
      theme.palette.info.main,
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.success.main,
      theme.palette.text.primary,
      theme.palette.warning.main,
      type,
    ]);

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
        content={
          <Box textAlign='center' py={2} fontSize={14} color={textColor}>
            {content}
          </Box>
        }
        actions={
          <>
            <DialogActionButton
              variant='contained'
              size='large'
              style={{ flex: 1, color: '#fff', backgroundColor: '#9f9f9f' }}
              {...cancelButtonProps}
              onClick={() => onCancel && onCancel(commands)}
            >
              {cancelButtonLabel}
            </DialogActionButton>
            <DialogActionButton
              variant='contained'
              size='large'
              color={color}
              style={{ flex: 1 }}
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
