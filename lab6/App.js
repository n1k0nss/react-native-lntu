import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import MenuSectionItems from './components/MenuSectionItems';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LittleLemonHeader />
      
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen 
          name="login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Welcome' }} 
        />
      </Stack.Navigator>
      
      <LittleLemonFooter />
    </NavigationContainer>
  );
}

