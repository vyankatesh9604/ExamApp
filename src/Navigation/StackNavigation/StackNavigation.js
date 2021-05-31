import React, { useEffect, useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../../Screens/Auth/LoginScreen';
import RegisterScreen from '../../Screens/Auth/RegisterScreen';
import { DrawerContent } from '../../Content/DrawerContent'
import mainNavigation from '../MainNavigation'
import Loading from '../../Loading';
import ClassStackScreen from '../../Navigation/StackNavigation/ClassStack'
const Stack = createStackNavigator();

const StackNavigation = ({ navigation }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' drawer={props => <DrawerContent  {...props} />}>
        {/* <RootStack.Screen name="SplashScreen" component={SplashScreen}/> */}
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name='HomeDrawer' component={mainNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};





export default StackNavigation;