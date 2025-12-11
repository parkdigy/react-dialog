import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';
import { DialogContextProvider } from '../../../../src';

const DefaultLayout = () => {
  //--------------------------------------------------------------------------------------------------------------------

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogContextProvider>
        <AdminLayout.DefaultLayout logo='react-hook' menu={menu}>
          <MainRouter />
        </AdminLayout.DefaultLayout>
      </DialogContextProvider>
    </ThemeProvider>
  );
};

export default DefaultLayout;
