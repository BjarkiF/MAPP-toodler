import 'react-native-gesture-handler';
// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Boards from '../views/Boards';
import Board from '../views/Board';
import List from '../views/List';

const Stack = createStackNavigator({
  Boards,
  Board,
  List,
});

export default createAppContainer(Stack);

/* const createAppContainer = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Boards"
        component={Boards}
        options={{ title: 'Toodler' }}
      />
      <Stack.Screen name="Board" component={Board} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default createAppContainer; */
