import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartUpMenu from "./screens/StartUpMenu"
import SettingsScreen from './screens/SettingsScreen';
import { HapticProvider } from "./context/HapticContext";
import HighScoreScreen from './screens/HighScoreScreen';


const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <HapticProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={StartUpMenu} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="HighScoreScreen" component={HighScoreScreen} />
        </Stack.Navigator>
      </HapticProvider>
    </NavigationContainer>
  );
};



