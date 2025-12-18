import React, { useMemo, useRef } from 'react';
import { AlertDialogCommands, AlertDialogProps as Props } from './AlertDialog.types';
import { Dialog, DialogCommands } from '../Dialog';
import { DialogActionButton } from '../DialogActionButton';
import { useForwardRef } from '@pdg/react-hook';

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

  useForwardRef(ref, commands, (cmd) => onCommands?.(cmd));

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
