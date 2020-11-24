import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Boards from '../views/Boards';
import Board from '../views/Board';

const Stack = createStackNavigator();

const createAppContainer = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="Boards"
                component={Boards}
                options={{title: 'Toodler'}}
            />
            <Stack.Screen name="Board" component={Board} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default createAppContainer;