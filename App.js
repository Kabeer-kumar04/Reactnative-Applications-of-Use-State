import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StateScreen from './src/screens/StateScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App"
          component={StateScreen}
        />
        <Stack.Screen name="Counter App"
          component={CounterScreen}
        />
        <Stack.Screen name="Random Color App"
          component={ColorScreen}
        />
        <Stack.Screen name="Square Color App"
          component={SquareScreen}
        />
        <Stack.Screen name="Text Screen App"
          component={TextScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;