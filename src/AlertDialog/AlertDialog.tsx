import React, { useImperativeHandle, useLayoutEffect, useMemo, useRef } from 'react';
import { AlertDialogCommands, AlertDialogProps as Props } from './AlertDialog.types';
import { Dialog, DialogCommands } from '../Dialog';
import { DialogActionButton } from '../DialogActionButton';

const AlertDialog = ({
  ref,
  color = 'primary',
  style,
  maxWidth = 'xs',
  confirmButtonLabel = '확인',
  confirmButtonProps,
  onCommands,
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const dialogRef = useRef<DialogCommands>(null);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  const commands = useMemo(
    (): AlertDialogCommands => ({
      getId: () => dialogRef.current?.getId() || '',
      close: () => dialogRef.current?.close(),
    }),
    []
  );

  useImperativeHandle(ref, () => commands);

  useLayoutEffect(() => {
    onCommands?.(commands);
  }, [commands, onCommands]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Dialog
      ref={dialogRef}
      color={color}
      autoClose
      escapeClose
      maxWidth={maxWidth}
      style={{
        zIndex: 1399,
        ...style,
      }}
      {...props}
      actions={
        <DialogActionButton variant='text' {...confirmButtonProps} onClick={() => dialogRef.current?.close()}>
          {confirmButtonLabel}
        </DialogActionButton>
      }
    />
  );
};

export default AlertDialog;
