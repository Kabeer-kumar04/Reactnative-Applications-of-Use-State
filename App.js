import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StateScreen from './src/screens/StateScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;