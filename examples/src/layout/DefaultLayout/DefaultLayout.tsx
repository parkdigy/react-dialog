import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';
import { DialogContextProvider } from '../../../../src';

const DefaultLayout = () => {
  const navigate = useNavigate();

  //--------------------------------------------------------------------------------------------------------------------

  const handleMenuClick = (menuItem: AdminLayout.MenuItem) => {
    if (menuItem.uri) {
      navigate(menuItem.uri);
    }
  };

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DialogContextProvider>
        <AdminLayout.DefaultLayout logo='react-dialog' menu={menu} onMenuClick={handleMenuClick}>
          <MainRouter />
        </AdminLayout.DefaultLayout>
      </DialogContextProvider>
    </ThemeProvider>
  );
};

export default DefaultLayout;
