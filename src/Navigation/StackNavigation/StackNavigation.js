import React from 'react';  

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';
import {DrawerContent} from '../../Content/DrawerContent'
import mainNavigation from '../MainNavigation'
const Stack = createStackNavigator();

const StackNavigation = ({navigation}) => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none' drawer={props => <DrawerContent  { ...props}/>}>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name='Home' component={mainNavigation}/>
    </Stack.Navigator>
    </NavigationContainer>
);

export default StackNavigation;