import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';
import { DialogContextProvider } from '../../../../src';

const FINAL_MENU = menu.map((info) => ({
  ...info,
  uri: !info.uri ? info.uri : isEnvProduction ? `/react-dialog${info.uri}` : info.uri,
  // items: info.items?.map((subInfo) => ({
  //   ...subInfo,
  //   uri: !subInfo.uri ? subInfo.uri : isEnvProduction ? `/react-dialog{subInfo.uri}` : subInfo.uri,
  // })),
}));

const DefaultLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogContextProvider>
        <AdminLayout.DefaultLayout logo='react-dialog' menu={FINAL_MENU}>
          <MainRouter />
        </AdminLayout.DefaultLayout>
      </DialogContextProvider>
    </ThemeProvider>
  );
};

export default DefaultLayout;
