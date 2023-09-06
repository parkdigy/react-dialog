import './init';

import React, { ErrorInfo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layout';
import { setDialogDefault } from '../../src';

import './sass/index.scss';

setDialogDefault({
  onBoundaryError(error: unknown, errorInfo: ErrorInfo) {
    console.log('!!! 오류 :', error, errorInfo);
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
