import React, { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import { Home } from '@comp';

const RootRoutes = () => {
  const rootPath = useMemo(() => (isEnvProduction ? '/react-dialog/' : '/'), []);

  return (
    <Routes>
      <Route
        path={`${rootPath}*`}
        element={
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Navigate to={rootPath} />} />
          </Routes>
        }
      />
      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default RootRoutes;
