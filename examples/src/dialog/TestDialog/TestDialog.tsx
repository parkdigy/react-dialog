import React, { useRef } from 'react';
import { Dialog, DialogCommands, DialogActionButton } from '../../../../src';
import { TestDialogProps as Props } from './TestDialog.types';
import { Button } from '@mui/material';

const TestDialog = ({ onShow, onClose }: Props) => {
  const dialogRef = useRef<DialogCommands>(null);

  return (
    <Dialog
      ref={dialogRef}
      maxWidth='md'
      titleIcon='dashboard'
      title='테스트 입니다'
      fullWidth
      fullHeight
      content={
        <div>
          {new Array(50).fill(0).map((v, idx) => (
            <div key={idx}>This is Test Dialog.</div>
          ))}
          <Button
            onClick={() => {
              dialogRef.current?.scrollToTop();
            }}
          >
            To TOP
          </Button>
        </div>
      }
      actions={
        <>
          <DialogActionButton onClick={() => dialogRef.current?.close()}>Close</DialogActionButton>
        </>
      }
      autoClose
      onShow={onShow}
      onClose={onClose}
    />
  );
};

export default TestDialog;
