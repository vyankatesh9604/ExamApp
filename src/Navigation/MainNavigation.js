import React from 'react'
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation/TabNavigation'
import { DrawerContent } from '../Content/DrawerContent'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'
import AssignmentScreen from '../Screens/AssignmentScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import QuizPage from '../Screens/exams/QuizPage/QuizPage'
import ClassStackScreen from '../Navigation/StackNavigation/ClassStack'
const AssignmentStack = createStackNavigator()
const ProfileStack = createStackNavigator()

const Drawer = createDrawerNavigator();


export default function MainNavigation() {
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setDarkTheme(isDarkTheme => !isDarkTheme)
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }

  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme
  return (
    <PaperProvider theme={theme}>

      <Drawer.Navigator theme={theme} initialRouteName="Home" drawerContent={props => <DrawerContent toggleTheme={toggleTheme} {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
        <Drawer.Screen name="Assign" component={AssignmentStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="QuizPage" component={QuizPage} />
        <Drawer.Screen name="ClassScreen" component={ClassStackScreen} /> 
        {/* <Drawer.Screen name="Detail" component={DetailStackScreen} /> */}
      </Drawer.Navigator>


    </PaperProvider>
  )
}



/////////////////Assignment Stack Screen///////////////////

const AssignmentStackScreen = ({ navigation }) => {
  return (
    <AssignmentStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <AssignmentStack.Screen name="Assignment" component={AssignmentScreen} options={{
        headerLeft: () => {
          return <Icon.Button name='md-menu' size={25} backgroundColor='blue' onPress={() => navigation.openDrawer()}></Icon.Button>
        },

      }} />
    </AssignmentStack.Navigator>
  )
}

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#2e64e5'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
    
      <ProfileStack.Screen name="Profile"  component={ProfileScreen} options={{
        headerLeft: () => {
          return <Icon.Button name="md-chevron-back-sharp" 
            onPress={() => navigation.goBack('home')}
            size={26} color="blue" backgroundColor='#2e64e5' color='white' />
        },

      }} />
    </ProfileStack.Navigator>
  )
}

