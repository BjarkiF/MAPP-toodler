import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Boards from '../views/Boards';
import Board from '../views/Board';
import List from '../views/List';

const Stack = createStackNavigator();

const createAppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Boards"
        component={Boards}
        options={() => ({ title: 'Boards' })}
      />
      <Stack.Screen
        name="Board"
        component={Board}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="List"
        component={List}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default createAppContainer;
