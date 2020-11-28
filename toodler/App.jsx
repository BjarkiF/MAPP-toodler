import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppContainer from './src/routes';

import ErrorBoundaryClass from './src/services/ErrorBondaryClass';

export default function App() {
  return (
<<<<<<< HEAD
    <ErrorBoundaryClass>
      <AppContainer />
    </ErrorBoundaryClass>
=======
    <MenuProvider>
      <AppContainer />
    </MenuProvider>
>>>>>>> 2ae6a855909da7d4e8543db34f869010d5a055b5
  );
}
