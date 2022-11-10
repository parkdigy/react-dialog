import React, { useCallback } from 'react';
import { TestDialog, TestDialogProps } from '#dialog';
import { Button, Grid, Typography } from '@mui/material';
import { useAlertDialog, useConfirmDialog, useDialog, ConfirmDialogCommands } from '@pdg/react-dialog';

const Home = () => {
  const alertDialog = useAlertDialog();
  const confirmDialog = useConfirmDialog();
  const testDialog = useDialog<TestDialogProps>(TestDialog);

  // Function --------------------------------------------------------------------------------------------------------

  const handleTestDialogClick = useCallback(() => {
    testDialog({ content: 'aaaa' });
  }, [testDialog]);

  const handleAlertDialogClick = useCallback(() => {
    alertDialog({
      title: '제목입니다',
      content: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      onShow() {
        ll('alertDialog show');
      },
      onClose() {
        ll('alertDialog close');
      },
    });
  }, [alertDialog]);

  const handleConfirmDialogClick = useCallback(() => {
    confirmDialog({
      color: 'error',
      title: '제목입니다',
      content: <Typography color='error'>오류가 발생했습니다. 다시 시도하시겠습니까?</Typography>,
      onShow() {
        ll('confirmDialog show');
      },
      onClose() {
        ll('confirmDialog close');
      },
      onConfirm(commands: ConfirmDialogCommands) {
        commands.close();
        ll('confirmDialog confirm');
      },
      onCancel(commands: ConfirmDialogCommands) {
        commands.close();
        ll('confirmDialog cancel');
      },
    });
  }, [confirmDialog]);

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <div>
      Home
      <br />
      <br />
      <div>
        <Grid container spacing={2}>
          <Grid item>
            <Button onClick={handleTestDialogClick}>testDialog</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleAlertDialogClick}>alertDialog</Button>
          </Grid>
          <Grid item>
            <Button onClick={handleConfirmDialogClick}>confirmDialog</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
