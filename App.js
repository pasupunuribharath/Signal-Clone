import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/LoginScreen"
const Stack = createStackNavigator();

export default function App() {

const globleScreenOptions ={

   headerStyle : {backgroundColor : "#2C6BED"},
   headerTitleStyle :{color : "white"},
   headerTinColor :"white"


}

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions ={globleScreenOptions}>
    <Stack.Screen options={{title : "'lets SignUp"}} name='Login' component={LoginScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
