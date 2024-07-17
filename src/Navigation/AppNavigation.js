import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen,ProductDetails,SplashScreen}  from '../Screens';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName='SplashScreen'
         screenOptions={{
          headerShown:false
         }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation