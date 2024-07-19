import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen,ProductDetails,SplashScreen}  from '../Screens';
import Cart from '../components/Cart';
import Receipt from '../components/Receipt';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        
         screenOptions={{
          headerShown:false
         }}
        >
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen}/> */}
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name='Cart' component={Cart} options={{
              headerShown:true,headerTitleAlign:'center',
              headerShadowVisible:false
            }} />
            <Stack.Screen name='ExitScreen' component={Receipt}  options={{
              headerShown:true,headerTitleAlign:'center',
              headerShadowVisible:false,
              headerTitle:'Receipt'
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation