import React, { useCallback } from 'react';
import { TestDialog } from '@dialog';
import { Button, Grid } from '@mui/material';
import { useAlertDialog, useConfirmDialog, useDialog, ConfirmDialogCommands } from '../../../../src';

const Home = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const alertDialog = useAlertDialog();
  const confirmDialog = useConfirmDialog();
  const testDialog = useDialog(TestDialog);

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const handleTestDialogClick = useCallback(() => {
    testDialog({ content: 'aaaa' });
  }, [testDialog]);

  const handleAlertDialogClick = useCallback(() => {
    alertDialog({
      title: 'Title',
      subTitle: 'Sub Title',
      content: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      color: 'secondary',
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
      type: 'error',
      title: 'Title',
      subTitle: 'Sub Title',
      content: '오류가 발생했습니다. 다시 시도하시겠습니까?',
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

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div>
      Home
      <br />
      <br />
      <div>
        <Grid container spacing={2}>
          <Grid>
            <Button onClick={handleTestDialogClick}>testDialog</Button>
          </Grid>
          <Grid>
            <Button onClick={handleAlertDialogClick}>alertDialog</Button>
          </Grid>
          <Grid>
            <Button onClick={handleConfirmDialogClick}>confirmDialog</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
