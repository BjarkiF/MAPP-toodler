import React from 'react';
import AppContainer from './src/routes';

import ErrorBoundaryClass from './src/services/ErrorBondaryClass';

export default function App() {
  return (
    <ErrorBoundaryClass>
      <AppContainer />
    </ErrorBoundaryClass>
  );
}
