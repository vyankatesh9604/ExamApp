import React from 'react'
import { NavigationContainer ,DarkTheme as NavigationDarkTheme,DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation/TabNavigation'
import {DrawerContent} from '../Content/DrawerContent'
import {Provider as PaperProvider ,DarkTheme as PaperDarkTheme,DefaultTheme as PaperDefaultTheme} from 'react-native-paper'

const Drawer = createDrawerNavigator();


export default function MainNavigation(){
  const [isDarkTheme,setDarkTheme] =React.useState(false);
  const toggleTheme = ()=>{
    setDarkTheme(isDarkTheme => !isDarkTheme)
  }

  const CustomDefaultTheme ={
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background:'#ffffff',
      text:'#333333'
    }
  
   }
  const CustomDarkTheme ={
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors:{
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background:'#333333',
      text:'#ffffff'
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme
  return(
    <PaperProvider  theme={theme}>
    
      <Drawer.Navigator theme={theme} initialRouteName="Home" drawerContent={props => <DrawerContent toggleTheme={toggleTheme} { ...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
      
   
    </PaperProvider>
  )
}