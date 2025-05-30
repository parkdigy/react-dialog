import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, styled } from '@mui/material';

export const StyledDialog = styled(Dialog)`
  &.Dialog-full-height {
    > .MuiDialog-container > .MuiDialog-paper {
      height: 100vh;
    }
  }
  > .MuiDialog-container > .MuiDialog-paper:not(.MuiDialog-paperFullScreen) {
    width: calc(100% - ${(props: { ['data-margin']: number }) => props['data-margin'] * 2}px);
    max-height: calc(100% - ${(props: { ['data-margin']: number }) => props['data-margin'] * 2}px);
    margin: 0;
  }
`;

export const StyledDialogTitle = styled(DialogTitle)(() => ({
  position: 'relative',
  paddingRight: 60,
  paddingTop: 10,
  paddingBottom: 10,
  width: '100%',
}));

export const StyleDialogTitleCloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 5,
  color: theme.palette.grey[500],
}));

export const StyledDialogContent = styled(DialogContent)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledDialogActions = styled(DialogActions)`
  padding-left: 20px;
  padding-right: 15px;
`;
