import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import AppContainer from './src/routes';

export default function App() {
  return (
    <MenuProvider>
      <AppContainer />
    </MenuProvider>
  );
}
