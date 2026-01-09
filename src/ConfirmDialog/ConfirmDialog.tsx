import React, { useMemo, useRef } from 'react';
import { type ConfirmDialogCommands, type ConfirmDialogProps as Props } from './ConfirmDialog.types';
import { Dialog, type DialogCommands, type DialogProps } from '../Dialog';
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

  const { color, textColor } = useMemo(() => {
    let _color: DialogProps['color'];
    let _textColor: string;

    switch (type) {
      case 'primary':
        _color = 'info';
        _textColor = theme.palette.primary.main;
        break;
      case 'secondary':
        _color = 'secondary';
        _textColor = theme.palette.secondary.main;
        break;
      case 'info':
        _color = 'info';
        _textColor = theme.palette.info.main;
        break;
      case 'success':
        _color = 'success';
        _textColor = theme.palette.success.main;
        break;
      case 'warning':
        _color = 'warning';
        _textColor = theme.palette.warning.main;
        break;
      case 'error':
        _color = 'error';
        _textColor = theme.palette.error.main;
        break;
      default:
        _color = 'primary';
        _textColor = theme.palette.text.primary;
    }

    return { color: _color, textColor: _textColor };
  }, [theme, type]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo(
    (): ConfirmDialogCommands => ({
      getId: () => dialogRef.current?.getId() || '',
      close: () => dialogRef.current?.close(),
    }),
    []
  );

  useForwardRef(ref, commands, (cmd) => onCommands?.(cmd));

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
