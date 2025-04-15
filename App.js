import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartUpMenu from "./screens/StartUpMenu"
import SettingsScreen from './screens/SettingsScreen';
import { SettingsProvider } from "./context/SettingsContext";
import HighScoreScreen from './screens/HighScoreScreen';
import PlayScreen from './screens/PlayScreen';
import GameOverScreen from './screens/GameOverScreen';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <SettingsProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={StartUpMenu} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
          <Stack.Screen name="HighScoreScreen" component={HighScoreScreen} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
          <Stack.Screen name="GameOver" component={GameOverScreen} />
        </Stack.Navigator>
      </SettingsProvider>
    </NavigationContainer>
  );
};