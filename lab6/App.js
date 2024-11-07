import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';
import MenuSectionItems from './components/MenuSectionItems';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Stack
// export default function App() {
//   return (
//     <NavigationContainer>
//       <LittleLemonHeader />
      
//       <Stack.Navigator initialRouteName="login">
//         <Stack.Screen 
//           name="login" 
//           component={LoginScreen} 
//           options={{ title: 'Login' }} 
//         />
//         <Stack.Screen 
//           name="welcome" 
//           component={WelcomeScreen} 
//           options={{ title: 'Welcome' }} 
//         />
//       </Stack.Navigator>
      
//       <LittleLemonFooter />
//     </NavigationContainer>
//   );
// }

// Tab
// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <LittleLemonHeader />
//         <Tab.Navigator
//           initialRouteName="Login"
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//               let iconName;
//               if (route.name === 'Welcome') {
//                 iconName = focused ? 'home' : 'home-outline';
//               } else if (route.name === 'Login') {
//                 iconName = focused ? 'log-in' : 'log-in-outline';
//               }
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: '#EE9972',
//             tabBarInactiveTintColor: 'gray',
//           })}
//         >
//           <Tab.Screen name="Welcome" component={WelcomeScreen} />
//           <Tab.Screen name="Login" component={LoginScreen} />
//         </Tab.Navigator>
//       </View>
//       <View style={styles.footerContainer}>
//         <LittleLemonFooter />
//       </View>
//     </NavigationContainer>
//   );
// }




//Drawer
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <LittleLemonHeader />
        <Drawer.Navigator
          initialRouteName="Login"
          screenOptions={({ route }) => ({
            drawerIcon: ({ focused, size }) => {
              let iconName;
              if (route.name === 'Welcome') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Login') {
                iconName = focused ? 'log-in' : 'log-in-outline';
              }
              return <Ionicons name={iconName} size={size} color="#EE9972" />;
            },
            drawerActiveTintColor: '#EE9972',
            drawerInactiveTintColor: 'gray',
            drawerStyle: {
              backgroundColor: '#333333',
              paddingTop: 20,
            },
            drawerLabelStyle: {
              fontSize: 18,
              color: '#EDEFEE',
            },
          })}
        >
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});

