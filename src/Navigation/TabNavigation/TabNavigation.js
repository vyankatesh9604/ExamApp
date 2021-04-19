// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import React from 'react'
// import HomeScreen from '../../Screens/HomeScreen'
// import SettingScreen from '../../Screens/SettingScreen'
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();
// export default function TabNavigation() {
//     return (
//         <Tab.Navigator
//     screenOptions={({ route }) => ({
//       tabBarIcon: ({ focused, color, size }) => {
//      let iconName;
//      if (route.name === 'Home') {
//         iconName = focused
//         ? 'md-home'
//         : 'md-home-outline';
//       } else if (route.name === 'Setting') {
//         iconName = focused
//         ? 'md-settings'
//         : 'md-settings-outline';
//       }
//       return <Ionicons name={iconName} size={size} color={color} />;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: 'white',
//         inactiveTintColor: 'white',
//         activeBackgroundColor: 'rgb(135, 32, 191)',
//         inactiveBackgroundColor: 'rgb(135, 95, 191)',
//       }}
//     >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Setting" component={SettingScreen} />
//     </Tab.Navigator>
//     )
// }
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/HomeScreen'
import ExamScreen from '../../Screens/ExamScreen'
import LeaderBoardScreen from '../../Screens/LeaderBoardScreen'
import ProfileScreen from '../../Screens/ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import Ion from 'react-native-vector-icons/MaterialIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const HomeStack = createStackNavigator();
const ExamStack = createStackNavigator();
// const ProfileStack=createStackNavigator();
const LeaderBoardStack=createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
export default function TabNavigation(){
  return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      // barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Exam"
        component={ExamStackScreen}
        options={{
          tabBarLabel: 'Exams',
          tabBarColor:'#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment-multiple" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#694fad',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Leader"
        component={LeaderBoardStackScreen}
        options={{
          tabBarLabel: 'LeaderBoard',
          tabBarColor:'#d02860',
          tabBarIcon: ({ color }) => (
            <Ion name="leaderboard" color={color} size={26} />
          ),
        }}
        />
    </Tab.Navigator>
  )
}

////////////////Stack Navigation ////////////////////
const HomeStackScreen = ({navigation}) =>{
  return(
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'#009387'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
        <HomeStack.Screen  name="Home" component={HomeScreen} options={{
          headerLeft:() => {
            return <Icon.Button  name='md-menu' size={25} backgroundColor="#009387" onPress={()=>navigation.openDrawer()}></Icon.Button>
          },

        }} />
  </HomeStack.Navigator> 
  )
 
}
const ExamStackScreen = ({navigation}) =>{
  return(
    <ExamStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#1f65ff'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
         <ExamStack.Screen name="Exam" component={ExamScreen} options={{
          headerLeft:() => {
            return <Icon.Button  name='md-menu' size={25} backgroundColor='#1f65ff' onPress={()=>navigation.openDrawer()}></Icon.Button>
          },

        }}  />
   </ExamStack.Navigator> 
  )

}
// const ProfileStackScreen = ({navigation}) =>{
//   return(
//     <ProfileStack.Navigator
//     screenOptions={{
//       headerStyle:{
//         backgroundColor:'#694fad'
//       },
//       headerTintColor:'#fff',
//       headerTitleStyle:{
//         fontWeight:'bold'
//       }
//     }}>
//          <ProfileStack.Screen  component={ProfileScreen} options={{
//            headerMode='none' headerLeft:() => {
//             return <Icon.Button  name='md-menu' size={25} backgroundColor='#694fad' onPress={()=>navigation.openDrawer()}></Icon.Button>
//           },

//         }}  />
//    </ProfileStack.Navigator> 
//   )
// }
const LeaderBoardStackScreen = ({navigation}) =>{
  return(
    <LeaderBoardStack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#d02860'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
         <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoardScreen} options={{
          headerLeft:() => {
            return <Icon.Button  name='md-menu' size={25} backgroundColor='#d02860'  onPress={()=>navigation.openDrawer()}></Icon.Button>
          },

        }}  />
   </LeaderBoardStack.Navigator> 
  )
      }


