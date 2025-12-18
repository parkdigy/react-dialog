import React, { useMemo, useRef } from 'react';
import { ConfirmDialogCommands, ConfirmDialogProps as Props } from './ConfirmDialog.types';
import { Dialog, DialogCommands, DialogProps } from '../Dialog';
import { DialogActionButton } from '../DialogActionButton';
import { Box, useTheme } from '@mui/material';
import { useForwardRef } from '@pdg/react-hook';

const ConfirmDialog = ({
  ref,
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
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogRef = useRef<DialogCommands>(null);

  /********************************************************************************************************************
   * color, textColor
   * ******************************************************************************************************************/

  let color: DialogProps['color'];
  let textColor: string;

  switch (type) {
    case 'primary':
      color = 'info';
      textColor = theme.palette.primary.main;
      break;
    case 'secondary':
      color = 'secondary';
      textColor = theme.palette.secondary.main;
      break;
    case 'info':
      color = 'info';
      textColor = theme.palette.info.main;
      break;
    case 'success':
      color = 'success';
      textColor = theme.palette.success.main;
      break;
    case 'warning':
      color = 'warning';
      textColor = theme.palette.warning.main;
      break;
    case 'error':
      color = 'error';
      textColor = theme.palette.error.main;
      break;
    default:
      color = 'primary';
      textColor = theme.palette.text.primary;
  }

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo(
    (): ConfirmDialogCommands =>
      ({
        getId: () => dialogRef.current?.getId() || '',
        close: () => dialogRef.current?.close(),
      }) as ConfirmDialogCommands,
    []
  );

  useForwardRef<ConfirmDialogCommands>(ref, commands, (commands) => onCommands?.(commands));

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
};
export default ConfirmDialog;
